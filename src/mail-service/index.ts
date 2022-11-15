import type { Transporter } from 'nodemailer'

import { ApiClient } from './api-client'
import { DBConnection } from './db-connection'
import { EmailData, eventMessages, EventType, formattedDate } from './utils'

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
        payload: {
          userEmailAddress: data.email,
          body: createEmailBody(data),
        },
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

interface EmailPayload {
  userEmailAddress: string
  body: string
}

export async function sendMail({
  payload,
  transporter,
}: {
  payload: EmailPayload
  transporter: Transporter
}) {
  const { userEmailAddress, body } = payload
  const { response } = (await transporter.sendMail({
    to: userEmailAddress,
    subject: 'Notification Email From Serlo',
    // TODO: there should be also email as plain text
    html: body,
  })) as { response: string }

  return response
}

function createEmailBody(data: EmailData) {
  const dates = data.dates.split(',')
  const event_ids = data.event_ids.split(',')
  const actor_names = data.actor_names.split(',')
  const notifications = actor_names
    .map((actor, i) => {
      return `<p>${actor} ${
        eventMessages[parseInt(event_ids[i]) as EventType]
      } ${formattedDate(new Date(dates[i]))}</p><br/>`
    })
    .toString()
  return `<p>Hello ${data.username}</p>
    <br/>
    ${notifications}
    <br/>
    Regards<br/>
    <span>Team</span>`
}
