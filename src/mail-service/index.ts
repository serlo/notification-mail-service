import type { Transporter } from 'nodemailer'
import Mailer from 'nodemailer-react'

import { graphql } from '../gql'
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

interface Node {
  id: number
  event: {
    __typename: string
    id: number
    date: string
    actor: {
      username: string
    }
  }
}

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter,
  apiClient: ApiClient
): Promise<Result[]> {
  const unnotifiedUsers = await dbConnection.fetchUnsentNotificationData()

  if (!unnotifiedUsers.length) return []

  const query = graphql(`
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
            id
            date
            actor {
              username
            }
          }
        }
      }
    }
  `)

  return await Promise.all(
    unnotifiedUsers.map(async (user) => {
      const { notifications } = await apiClient.fetch(query, {
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
}

async function sendMail(
  { username, email }: { username: string; email: string },
  notifications: Node[],
  transporter: Transporter
) {
  // This is nice simple lib. We don't really need it, but if we are going
  // to keep it, let's refactor to declare it at the src/index
  const mailer = Mailer({ transport: transporter }, { NotificationEmail })

  const props = {
    username,
    actorNames: notifications.map(
      (notification) => notification.event.actor.username
    ),
    eventIds: notifications.map((notification) =>
      notification.event.id.toString()
    ),
    dates: notifications.map((notification) => String(notification.event.date)),
  }
  // TODO: there should be also email as plain text
  const { response } = await mailer.send('NotificationEmail', props, {
    to: email,
  })

  return response
}
