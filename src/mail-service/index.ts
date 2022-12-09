import { RequestDocument } from 'graphql-request'
import type { Transporter } from 'nodemailer'
import Mailer from 'nodemailer-react'

import { graphql } from '../gql'
import { Answer, ApiClient, Node } from './api-client'
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

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter,
  apiClient: ApiClient
): Promise<Result[]> {
  const unnotifiedUsers = await dbConnection.getAllUnsentEmailData()

  if (!unnotifiedUsers.length) return []

  // TODO: Make me better
  const query: RequestDocument = graphql(`
    query getNotifications($userId: Int!) {
      notifications(
        first: 500
        unread: true # FIXME / TODO #emailSent: false #emailSubscribed: true #userId: $userId
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
  `)

  interface Data {
    userEmail: string
    username: string
    notifications: Node[]
  }

  return await Promise.all(
    unnotifiedUsers.map(async (user) => {
      const notifications: Answer = await apiClient.fetch({
        query,
        variables: { userId: user.id },
      })
      const returnCode = await sendMail({
        data: {
          userEmail: user.email,
          username: user.username,
          notifications: notifications.nodes,
        } as Data,
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
}

async function sendMail({
  data,
  transporter,
}: {
  data: {
    username: string
    userEmail: string
    notifications: Node[]
  }
  transporter: Transporter
}) {
  const { notifications } = data

  // This is nice simple lib. We don't really need it, but if we are going
  // to keep it, let's refactor to declare it at the src/index
  const mailer = Mailer({ transport: transporter }, { NotificationEmail })

  const test = {
    username: data.username,
    actorNames: notifications.map(
      (notification) => notification.event.actor.username
    ),
    eventIds: notifications.map(
      (notification) => notification.event.id as string
    ),
    dates: notifications.map(
      (notification) => notification.event.date as string
    ),
  } as Parameters<NotificationEmail>
  // TODO: there should be also email as plain text
  const { response } = await mailer.send('NotificationEmail', test, {
    to: data.userEmail,
  })

  return response
}
