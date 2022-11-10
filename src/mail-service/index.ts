import { Transporter as NodemailerTransporter } from 'nodemailer'

import { DBConnection } from './db-connection'
import { EmailPayload } from './utils'

export * from './db-connection'

type Transporter =
  | NodemailerTransporter
  | { sendMail(x: unknown): Promise<TransporterResponse> }

interface TransporterResponse {
  response: string
}

export async function notifyUsers(
  dbConnection: DBConnection,
  transporter: Transporter,
  senderEmailAddress: string
): Promise<EmailPayload[]> {
  const emailPayloads = await dbConnection.getAllUnsentEmailData()

  for (const payload of emailPayloads) {
    const responseStatus = await sendMail({
      payload,
      transporter,
      senderEmailAddress,
    })

    // actually there are other success codes see https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes
    if (responseStatus == '250 Ok') {
      await dbConnection.updateNotificationSendStatus(payload.ids)
    }
  }

  // TODO: better would be something like
  // [{ success: true, userId: 1, username: 'user', notifications: [3,4] }, { success: false, userId: 2, username: 'user2', notifications: [5,6] }]
  return emailPayloads
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
