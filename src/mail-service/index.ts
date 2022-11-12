import { Transporter as NodemailerTransporter } from 'nodemailer'

import { ApiClient } from './api-client'
import { DBConnection } from './db-connection'
import {
  EmailData,
  EmailPayload,
  eventMessages,
  EventType,
  formattedDate,
} from './utils'

export * from './api-client'
export * from './db-connection'

type Transporter =
  | NodemailerTransporter
  | { sendMail(x: unknown): Promise<TransporterResponse> }

interface TransporterResponse {
  response: string
}

interface Result {
  success: boolean
  reason?: unknown
  userId: number
  notificationsIds: number[]
}

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter,
  apiGraphqlClient: ApiClient,
  senderEmailAddress: string
): Promise<Result[]> {
  const notificationsRawData = await dbConnection.getAllUnsentEmailData()

  if (!notificationsRawData.length) return []

  const results = await Promise.all(
    notificationsRawData.map(async (data) => {
      const payload = {
        userEmailAddress: data.email,
        body: createEmailBody(data),
      }

      const responseStatus = await sendMail({
        payload,
        transporter,
        senderEmailAddress,
      })

      const notification_ids = data.notification_ids.split(',')

      const baseResult = {
        userId: data.user_id,
        notificationsIds: notification_ids.map((x) => parseInt(x, 10)),
      }

      // actually there are other success codes, see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
      if (responseStatus == '250 Ok') {
        await dbConnection.updateNotificationSendStatus(notification_ids)
        return {
          success: true,
          ...baseResult,
        }
      } else {
        return {
          success: false,
          reason: responseStatus,
          ...baseResult,
        }
      }
    })
  )

  return results
}

export async function sendMail({
  payload,
  transporter,
  senderEmailAddress,
}: {
  payload: EmailPayload
  transporter: Transporter
  senderEmailAddress: string
}) {
  const { userEmailAddress, body } = payload
  const { response } = (await transporter.sendMail({
    from: senderEmailAddress,
    to: userEmailAddress,
    subject: 'Notification Email From Serlo',
    // TODO: there should be also email as plain text
    html: body,
  })) as TransporterResponse

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
