// eslint-disable-next-line import/no-internal-modules
import { Connection } from 'mysql2/promise'
import { Transporter } from 'nodemailer'

import { getAllUnsentEmailData, updateNotificationSendStatus } from './db-query'
import {
  EmailData,
  EmailPayload,
  eventMessages,
  EventType,
  formattedDate,
} from './utils'

export const filterDataForEmail = (emailData: EmailData[]) => {
  const emailPayload: EmailPayload[] = []

  emailData.forEach((data) => {
    const dates = data.dates.split(',')
    const event_ids = data.event_ids.split(',')
    const notification_ids = data.notification_ids.split(',')
    const actor_names = data.actor_names.split(',')
    let body = ''
    actor_names.forEach((actor: string, i: number) => {
      body = `${body}<p>${actor} ${
        eventMessages[parseInt(event_ids[i]) as EventType]
      } ${formattedDate(new Date(dates[i]))}</p><br/>`
    })
    emailPayload.push({
      user_id: data.user_id,
      username: data.username,
      email: data.email,
      ids: notification_ids,
      body,
    })
  })

  return emailPayload
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

export async function sendEmailToUser(
  connection: Connection,
  transporter: Transporter,
  senderEmailAddress: string
): Promise<EmailPayload[]> {
  const emailData = await getAllUnsentEmailData(connection)

  if (!emailData) return []

  const emailPayloads = filterDataForEmail(emailData)

  emailPayloads.map(async (payload) => {
    const mailStatus = await sendMail({
      payload,
      transporter,
      senderEmailAddress,
    })

    if (mailStatus == '250 Ok') {
      await updateNotificationSendStatus(payload.ids, connection)
    }
  })

  return emailPayloads
}
