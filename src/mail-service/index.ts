import type { Transporter } from 'nodemailer'
import Mailer from 'nodemailer-react'

import { ApiClient } from './api-client'
import { DBConnection } from './db-connection'
import { EmailData } from './email-data'
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
  _apiGraphqlClient: ApiClient
): Promise<Result[]> {
  const notificationsRawData = await dbConnection.getAllUnsentEmailData()

  if (!notificationsRawData.length) return []

  const results = await Promise.all(
    notificationsRawData.map(async (data) => {
      const returnCode = await sendMail({
        data,
        transporter,
      })

      const notificationIds = data.notification_ids.split(',')

      const baseResult = {
        userId: data.user_id,
        notificationsIds: notificationIds.map((x) => parseInt(x, 10)),
      }

      // actually there are other success codes, see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
      if (returnCode === '250 Ok') {
        await dbConnection.updateNotificationSendStatus(notificationIds)
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

export async function sendMail({
  data,
  transporter,
}: {
  data: EmailData
  transporter: Transporter
}) {
  // This is nice simple lib. We don't really need it, but if we are going
  // to keep it, let's refactor to declare it at the src/index
  const mailer = Mailer({ transport: transporter }, { NotificationEmail })

  // TODO: there should be also email as plain text
  const { response } = await mailer.send(
    'NotificationEmail',
    {
      username: data.username,
      actorNames: data.actor_names.split(','),
      eventIds: data.event_ids.split(','),
      dates: data.dates.split(','),
    },
    {
      to: data.email,
    }
  )

  return response
}
