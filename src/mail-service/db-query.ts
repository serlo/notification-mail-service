// eslint-disable-next-line import/no-internal-modules
import mysql from 'mysql2/promise'

import { config } from '../config'
import { EmailData } from './types'

export const getAllUnsentEmailData = async () => {
  const connection = await mysql.createConnection(config.db)

  // TODO: simplify query, maybe using API. Add in api query that gets all unread notifications grouped by user_id
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
  return rows as EmailData[]
}

export const updateNotificationSendStatus = async (
  notificationsIds: string[]
) => {
  const connection = await mysql.createConnection(config.db)

  const ids = notificationsIds.join().replace("'", ' ')

  try {
    return await connection.query(
      `UPDATE notification
          SET email_sent = true
          WHERE id in (${String(ids)});`
    )
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.log('update query error', e)
    return e
  }
}
