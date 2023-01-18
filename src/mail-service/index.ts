import {GraphQLClient} from 'graphql-request'
import type {Transporter} from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import {renderToStaticMarkup} from 'react-dom/server'

import {GetNotificationsQuery, GetNotificationsQueryVariables, Instance} from '../gql/graphql'
import {DBConnection} from './db-connection'
import {getNotifications} from './get-notifications-query'
import {NotificationEmailComponent} from './templates'
import {strings} from './templates/helper/german-strings'
import {getUserLanguage} from "./language-query";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";

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
      //TODO: Das as ist drin, da sich Intellij beschwert, aber vermutlich brauchen wir es nicht.
      const { notifications } = await apiClient.request(getNotifications as TypedDocumentNode<GetNotificationsQuery, GetNotificationsQueryVariables>, {
        userId: user.id,
      })
      const { uuid } = await apiClient.request(getUserLanguage, {
        userId: user.id,
      })
      if (uuid?.__typename != "User") throw Error
      const returnCode = await sendMail(
        {
          username: user.username,
          email: user.email,
          language: uuid.language? uuid.language : null,
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
  { username, email, language }: { username: string; email: string; language: Instance | null },
  notifications: GetNotificationsQuery['notifications']['nodes'],
  transporter: Transporter<SMTPTransport.SentMessageInfo>
) {
  const emailPayload = {
    username,
    events: notifications.map((node) => node.event),
    language,
  }
  const body = renderToStaticMarkup(NotificationEmailComponent(emailPayload))

  const bodyPlainText = body.replaceAll('<br/>', '\n').replace(/<[^>]*>?/gm, '')

  const { response } = await transporter.sendMail({
    html: `<!DOCTYPE html>${body}`,
    text: bodyPlainText,
    subject: strings.emailSubject,
    to: email,
  })

  return response
}
