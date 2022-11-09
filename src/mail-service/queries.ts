// eslint-disable-next-line import/no-internal-modules
import { Connection } from 'mysql2/promise'

import {
  EmailData,
  EmailPayload,
  eventMessages,
  EventType,
  formattedDate,
} from './utils'

export async function getAllUnsentEmailData(connection: Connection) {
  const [rows] = await connection.execute(
    `SELECT GROUP_CONCAT(notification.id) as notification_ids, notification.user_id, user.username, user.email, 
        GROUP_CONCAT(event_log.event_id) as event_ids, GROUP_CONCAT(event_log.date) as dates, GROUP_CONCAT(actor.username) as actor_names          
      FROM notification
      INNER JOIN user ON user.id = notification.user_id 
      INNER JOIN notification_event ON notification.id = notification_event.notification_id
      INNER JOIN event_log ON event_log.id = notification_event.event_log_id
      JOIN event ON event.id = event_log.event_id
      LEFT JOIN event_parameter ON event_parameter.log_id =  event_log.id
      LEFT JOIN event_parameter_uuid ON event_parameter_uuid.event_parameter_id = event_parameter.id
      INNER JOIN user actor ON event_log.actor_id = actor.id
      INNER JOIN subscription ON subscription.user_id = user.id AND event_parameter_uuid.uuid_id = subscription.uuid_id
      WHERE notification.email = 1 AND notification.email_sent = 0 AND notification.seen = 0
      GROUP BY notification.user_id;`
  )
  return prepareEmailPayload(rows as EmailData[])
}

export function prepareEmailPayload(emailData: EmailData[]) {
  if (!emailData.length) return []

  const emailPayload: EmailPayload[] = emailData.map((data) => {
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
    return {
      user_id: data.user_id,
      username: data.username,
      email: data.email,
      ids: notification_ids,
      body,
    }
  })

  return emailPayload
}

export async function updateNotificationSendStatus(
  notificationsIds: string[],
  connection: Connection
) {
  await connection.query(
    `UPDATE notification
        SET email_sent = true
        WHERE id in (${String(notificationsIds.join().replace("'", ' '))});`
  )
}
