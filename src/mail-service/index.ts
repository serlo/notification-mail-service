import { Transporter as NodemailerTransporter } from 'nodemailer'

import { DBConnection } from './db-connection'
import { EmailPayload } from './utils'

export * from './db-connection'

type Transporter =
  | NodemailerTransporter
  | { sendMail(x: unknown): Promise<{ response: string }> }

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

    if (responseStatus == '250 Ok') {
      await dbConnection.updateNotificationSendStatus(payload.ids)
    }
  }

  return emailPayloads
}

export async function sendMail({
  payload,
  transporter,
  senderEmailAddress,
}: {
  payload: Omit<EmailPayload, 'ids' | 'user_id'>
  transporter: Transporter
  senderEmailAddress: string
}) {
  const { username, email: userEmailAddress, body } = payload
  const { response } = (await transporter.sendMail({
    from: senderEmailAddress,
    to: userEmailAddress,
    subject: 'notification Email From Serlo',
    html: `<p>Hello ${username}</p>
        <br/>
        ${body}
        <br/>
        Regards<br/>
        <span>Team</span>`,
  })) as { response: string }

  return response
}
