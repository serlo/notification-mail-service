import { GraphQLClient } from 'graphql-request'
import type { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { renderToStaticMarkup } from 'react-dom/server'

import { Instance } from '../gql/graphql'
import { DBConnection } from './db-connection'
import { getNotifications } from './get-notifications-query'
import { NotificationEmailComponent } from './templates'
import { Event } from './templates/components/event'
import { getLanguageStrings } from './templates/helper/get-language-strings'
import { de, en } from './templates/helper/language-strings'

export * from './db-connection'

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter<SMTPTransport.SentMessageInfo>,
  apiClient: Pick<GraphQLClient, 'request'>
): Promise<Result[]> {
  const unnotifiedUsers = await dbConnection.fetchUnnotifiedUsers()

  return await Promise.all(
    unnotifiedUsers.map(async (user) => {
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
        return {
          success: false,
          reason: 'Server error: user.id is not of a user',
          ...baseResult,
        }
      }

      const returnCode = await sendMail({
        username: user.username,
        email: user.email,
        language: uuid.language,
        events: notifications.nodes.map((n) => n.event),
        transporter,
      })

      // actually there are other success codes, see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
      if (returnCode === '250 Ok') {
        // Possible performance improvement: group all successful and update them all in the end
        await dbConnection.updateNotificationSentStatus(
          baseResult.notificationsIds
        )

        return { success: true, ...baseResult }
      } else {
        return { success: false, reason: returnCode, ...baseResult }
      }
    })
  )
}

type Result = Succees | Fail

interface Fail extends BaseResult {
  success: false
  reason: unknown
}

interface Succees extends BaseResult {
  success: true
}

interface BaseResult {
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
