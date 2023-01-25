import { GraphQLClient } from 'graphql-request'
import type { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { renderToStaticMarkup } from 'react-dom/server'

import { GetNotificationsQuery, Instance } from '../gql/graphql'
import { DBConnection } from './db-connection'
import { getNotifications } from './get-notifications-query'
import { NotificationEmailComponent } from './templates'
import { getLanguageStrings } from './templates/helper/get-language-strings'

export * from './db-connection'

interface Result {
  success: boolean
  reason?: unknown
  userId: number
  notificationsIds: number[]
}

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter<SMTPTransport.SentMessageInfo>,
  apiClient: Pick<GraphQLClient, 'request'>
): Promise<Result[]> {
  const unnotifiedUsers = await dbConnection.fetchUnnotifiedUsers()

  if (!unnotifiedUsers.length) return []

  return await Promise.all(
    unnotifiedUsers.map(async (user) => {
      const { notifications, uuid } = await apiClient.request(
        getNotifications,
        {
          userId: user.id,
        }
      )

      const baseResult = {
        userId: user.id,
        notificationsIds: notifications.nodes.map(
          (notification) => notification.id
        ),
      }

      // TODO: this check had to be unnecessary
      if (uuid?.__typename !== 'User')
        return {
          success: false,
          reason: 'Server error: user.id is not of a user',
          ...baseResult,
        }

      const returnCode = await sendMail(
        {
          username: user.username,
          email: user.email,
          language: uuid.language,
        },
        notifications.nodes,
        transporter
      )

      // actually there are other success codes, see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
      if (returnCode === '250 Ok') {
        // Possible performance improvement: group all successful and update them all in the end
        await dbConnection.updateNotificationSentStatus(
          notifications.nodes.map((notification) => notification.id.toString())
        )
        return {
          success: true,
          ...baseResult,
        }
      } else {
        return {
          success: false,
          reason: returnCode,
          ...baseResult,
        }
      }
    })
  )
}

async function sendMail(
  {
    username,
    email,
    language,
  }: { username: string; email: string; language?: Instance | null },
  notifications: GetNotificationsQuery['notifications']['nodes'],
  transporter: Transporter<SMTPTransport.SentMessageInfo>
) {
  const strings = getLanguageStrings(language)
  const emailPayload = {
    username,
    events: notifications.map((node) => node.event),
    language,
    strings,
  }

  const body = renderToStaticMarkup(NotificationEmailComponent(emailPayload))

  const bodyPlainText = removeHtmlTags(body)

  const { response } = await transporter.sendMail({
    html: `<!DOCTYPE html>${body}`,
    text: bodyPlainText,
    subject: strings.email.subject,
    to: email,
  })

  return response
}

function removeHtmlTags(html: string) {
  return html.replaceAll('<br/>', '\n').replace(/<[^>]*>?/gm, '')
}
