import { Notification as ApiNotification } from '@serlo/api'
import { gql } from 'graphql-request'
import type { Transporter } from 'nodemailer'
import Mailer from 'nodemailer-react'

import { ApiClient } from './api-client'
import { DBConnection } from './db-connection'
import { NotificationEmail } from './templates'

export * from './api-client'
export * from './db-connection'

interface Result {
  success: boolean
  reason?: unknown
  userId: number
  notificationsIds: number[]
}

// AbstractNotificationEvent has __typename, but it is not in its type...
type Notification = ApiNotification & {
  event: ApiNotification['event'] & { __typename: string }
}

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter,
  apiGraphqlClient: ApiClient
): Promise<Result[]> {
  const unnotifiedUsers = await dbConnection.getAllUnsentEmailData()

  if (!unnotifiedUsers.length) return []

  const results = await Promise.all(
    unnotifiedUsers.map(async (user) => {
      const { notifications } = (await apiGraphqlClient.fetch({
        query: gql`
          query getNotifications($userId: Int!) {
            notifications(
              first: 500
              unread: true
              emailSent: false
              emailSubscribed: true
              userId: $userId
            ) {
              nodes {
                id
                event {
                  __typename
                  date
                  actor {
                    username
                  }
                }
              }
            }
          }
        `,
        variables: {
          userId: user.id,
        },
      })) as {
        notifications: {
          nodes: Notification[]
        }
      }
      const returnCode = await sendMail({
        data: {
          userEmail: user.email,
          username: user.username,
          notifications: notifications.nodes,
        },
        transporter,
      })

      const baseResult = {
        userId: user.id,
        notificationsIds: notifications.nodes.map(
          (notification) => notification.id
        ),
      }

      // actually there are other success codes, see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
      if (returnCode === '250 Ok') {
        await dbConnection.updateNotificationSendStatus(
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

  return results
}

async function sendMail({
  data,
  transporter,
}: {
  data: {
    username: string
    userEmail: string
    notifications: Notification[]
  }
  transporter: Transporter
}) {
  const { notifications } = data

  // This is nice simple lib. We don't really need it, but if we are going
  // to keep it, let's refactor to declare it at the src/index
  const mailer = Mailer({ transport: transporter }, { NotificationEmail })

  // TODO: there should be also email as plain text
  const { response } = await mailer.send(
    'NotificationEmail',
    {
      username: data.username,
      actorNames: notifications.map(
        (notification) => notification.event.actor.username
      ),
      eventIds: notifications.map(
        (notification) => notification.event.__typename
      ),
      dates: notifications.map((notification) => notification.event.date),
    },
    {
      to: data.userEmail,
    }
  )

  return response
}
