import { GraphQLClient } from 'graphql-request'
import type { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { renderToStaticMarkup } from 'react-dom/server'

import { GetNotificationsQuery } from '../gql/graphql'
import { DBConnection } from './db-connection'
import { getNotificationsQuery } from './get-notifications-query'
import { NotificationEmailComponent } from './templates'

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { notifications } = await apiClient.request(getNotificationsQuery, {
        userId: user.id,
      })
      const returnCode = await sendMail(
        {
          username: user.username,
          email: user.email,
        },
        notifications.nodes,
        transporter
      )

      const baseResult = {
        userId: user.id,
        notificationsIds: notifications.nodes.map(
          (notification) => notification.id
        ),
      }

      // actually there are other success codes, see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
      if (returnCode === '250 Ok') {
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
  { username, email }: { username: string; email: string },
  notifications: GetNotificationsQuery['notifications']['nodes'],
  transporter: Transporter<SMTPTransport.SentMessageInfo>
) {
  const emailPayload = {
    username,
    events: notifications.map((node) => node.event),
  }
  const body = renderToStaticMarkup(NotificationEmailComponent(emailPayload))

  const bodyPlainText = body.replaceAll('<br/>', '\n').replace(/<[^>]*>?/gm, '')

  const { response } = await transporter.sendMail({
    html: `<!DOCTYPE html>${body}`,
    text: bodyPlainText,
    subject: 'You have unread notifications in serlo.org',
    to: email,
  })

  return response
}
