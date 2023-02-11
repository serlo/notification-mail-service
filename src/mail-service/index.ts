import { GraphQLClient } from 'graphql-request'
import type { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { renderToStaticMarkup } from 'react-dom/server'

import { DBConnection } from './db-connection'
import { getNotifications } from './get-notifications-query'
import { NotificationEmailComponent } from './templates'
import { Event } from './templates/components/event'
import { getLanguageStrings } from './templates/helper/get-language-strings'
import { de, en } from './templates/helper/language-strings'
import { Instance } from '../gql/graphql'

export * from './db-connection'

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter<SMTPTransport.SentMessageInfo>,
  apiClient: Pick<GraphQLClient, 'request'>
): Promise<Result[]> {
  const unnotifiedUsers = await dbConnection.fetchUnnotifiedUsers()

  const results: Result[] = []

  for (const user of unnotifiedUsers) {
    try {
      const { notifications, uuid } = await apiClient.request(
        getNotifications,
        { userId: user.id }
      )

      const baseResult = {
        userId: user.id,
        notificationsIds: notifications.nodes.map(
          (notification) => notification.id
        ),
      }

      // Since we can only requests UUIDs we need a check whether the requested
      // uuid is a user (which shall always be the case)
      if (uuid?.__typename !== 'User') {
        results.push({
          success: false,
          reason: `Server error: ${user.id} is not an id of a user`,
          ...baseResult,
        })
        continue
      }

      const statusCode = await sendMail({
        username: user.username,
        email: user.email,
        language: uuid.language,
        events: notifications.nodes.map((n) => n.event),
        transporter,
      })

      // Possible performance improvement: group all successful and update them all in the end
      await dbConnection.updateNotificationSentStatus(
        baseResult.notificationsIds
      )

      // See https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes for successful status codes
      statusCode[0] === '2'
        ? results.push({ success: true, ...baseResult })
        : results.push({ success: false, reason: statusCode, ...baseResult })
    } catch (error) {
      results.push({ success: false, reason: error })
    }

    await wait()
  }

  return results
}

function wait(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

type Result = SucceededResult | FailedResult

interface FailedResult {
  success: false
  reason: unknown
}

interface SucceededResult {
  success: true
  userId: number
  notificationsIds: number[]
}

async function sendMail({
  username,
  email,
  language,
  events,
  transporter,
}: {
  username: string
  email: string
  language?: Instance | null
  events: Event[]
  transporter: Transporter<SMTPTransport.SentMessageInfo>
}) {
  const { subject, body } = createEmailSubjectAndBody({
    username,
    events,
    language,
  })

  const { response } = await transporter.sendMail({
    html: `<!DOCTYPE html>${body}`,
    text: removeHtmlTags(body),
    subject,
    to: email,
  })

  return response
}

function createEmailSubjectAndBody({
  username,
  events,
  language,
}: {
  username: string
  events: Event[]
  language?: Instance | null
}) {
  if (language == null) {
    const germanBody = renderToStaticMarkup(
      NotificationEmailComponent({
        username,
        events,
        strings: de.strings,
      })
    )
    const englishBody = renderToStaticMarkup(
      NotificationEmailComponent({
        username,
        events,
        strings: en.strings,
      })
    )

    return {
      body: `<p>English message below</p><br>${germanBody}<br>${englishBody}`,
      subject: `${de.strings.email.subject} | ${en.strings.email.subject}`,
    }
  }
  const strings = getLanguageStrings(language)

  return {
    subject: strings.email.subject,
    body: renderToStaticMarkup(
      NotificationEmailComponent({
        username,
        events,
        strings,
      })
    ),
  }
}

function removeHtmlTags(html: string) {
  return html.replaceAll('<br/>', '\n').replace(/<[^>]*>?/gm, '')
}
