// eslint-disable-next-line import/no-internal-modules
import mysql from 'mysql2/promise'

import { config } from '../config'
import { formattedDate } from '../utils'
import { getAllUnsentEmailData, updateNotificationSendStatus } from './db-query'
import { EventType, eventMessages } from './email-message'
import { sendMail } from './mail'
import { EmailData, EmailPayload } from './types'

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

export async function sendEmailToUser(): Promise<
  [EmailPayload[] | null, unknown]
> {
  const connection = await mysql.createConnection(config.db)
  try {
    const emailData = await getAllUnsentEmailData(connection)

    if (!emailData) {
      return [null, null]
    }

    const emailPayloads = filterDataForEmail(emailData)

    for (const payload of emailPayloads) {
      const mailStatus: string = await sendMail(
        payload.username,
        payload.email,
        payload.body
      )

      if (mailStatus == '250 Ok') {
        await updateNotificationSendStatus(payload.ids, connection)
      } else {
        throw new Error(`Email receiver responded with status ${mailStatus}`)
      }
    }

    return [emailPayloads, null]
  } catch (ex) {
    /* eslint-disable-next-line no-console */
    console.log(ex)
    return [null, ex]
  } finally {
    await connection.end()
  }
}
