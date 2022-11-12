import { Transporter as NodemailerTransporter } from 'nodemailer'

import { ApiClient } from './api-client'
import { DBConnection } from './db-connection'
import { EmailPayload } from './utils'

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
  const emailPayloads = await dbConnection.getAllUnsentEmailData()

  const results = await Promise.all(
    emailPayloads.map(async (payload) => {
      const responseStatus = await sendMail({
        payload,
        transporter,
        senderEmailAddress,
      })

      const baseResult = {
        userId: payload.user_id,
        notificationsIds: payload.ids.map((x) => parseInt(x, 10)),
      }

      // actually there are other success codes, see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
      if (responseStatus == '250 Ok') {
        await dbConnection.updateNotificationSendStatus(payload.ids)
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
  const { username, email: userEmailAddress, body } = payload
  const { response } = (await transporter.sendMail({
    from: senderEmailAddress,
    to: userEmailAddress,
    subject: 'notification Email From Serlo',
    // TODO: there should be also email as plain text
    html: `<p>Hello ${username}</p>
        <br/>
        ${body}
        <br/>
        Regards<br/>
        <span>Team</span>`,
  })) as TransporterResponse

  return response
}
