// eslint-disable-next-line import/no-internal-modules
import { Connection } from 'mysql2/promise'
import { Transporter } from 'nodemailer'

import { getAllUnsentEmailData, updateNotificationSendStatus } from './queries'
import { EmailPayload } from './utils'

export async function notifyUsers(
  connection: Connection,
  transporter: Transporter,
  senderEmailAddress: string
): Promise<EmailPayload[]> {
  const emailPayloads = await getAllUnsentEmailData(connection)

  for (const payload of emailPayloads) {
    const responseStatus = await sendMail({
      payload,
      transporter,
      senderEmailAddress,
    })

    if (responseStatus == '250 Ok') {
      await updateNotificationSendStatus(payload.ids, connection)
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
