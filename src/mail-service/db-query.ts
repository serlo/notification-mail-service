import mysql from 'mysql'

import { config } from '../config'
import { EmailData } from './types'

const database = mysql.createConnection(config.db)

export const getAllUnsentEmailData = (): Promise<EmailData[]> | undefined => {
  try {
    return new Promise<EmailData[]>((resolve, reject) => {
      // TODO: simplify query, maybe using API. Add in api query that gets all unread notifications grouped by user_id
      database.query(
        `SELECT notification.id, notification.user_id, user.username, user.email, 
            event_log.event_id, event_log.date, instance.name as domain, actor.username as actor_name,
            event_parameter_name.name as epn_name, event_parameter_string.value            
          FROM notification
          INNER JOIN user ON user.id = notification.user_id 
          INNER JOIN notification_event ON notification.id = notification_event.notification_id
          INNER JOIN event_log ON event_log.id = notification_event.event_log_id
          JOIN event ON event.id = event_log.event_id
          JOIN instance on instance.id = event_log.instance_id
          LEFT JOIN event_parameter ON event_parameter.log_id =  event_log.id
          LEFT JOIN event_parameter_name ON event_parameter_name.id = event_parameter.name_id
          LEFT JOIN event_parameter_string ON event_parameter_string.event_parameter_id = event_parameter.id
          LEFT JOIN event_parameter_uuid ON event_parameter_uuid.event_parameter_id = event_parameter.id
          INNER JOIN user actor ON event_log.actor_id = actor.id
          INNER JOIN subscription ON subscription.user_id = user.id AND event_parameter_uuid.uuid_id = subscription.uuid_id
          WHERE notification.email=1 and notification.email_sent = 0 and notification.seen = 0;`,
        function (
          err: mysql.MysqlError | null,
          result: EmailData[] | PromiseLike<EmailData[]>
        ) {
          err ? reject(err) : resolve(result)
        }
      )
    })
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.log('get query error', e)
  }
}

export const updateNotificationSendStatus = (notificationsIds: string[]) => {
  const ids = notificationsIds.join().replace("'", ' ')

  try {
    return new Promise((resolve, reject) => {
      database.query(
        `UPDATE notification 
            SET email_sent = true
            WHERE id in (${String(ids)});`,
        function (err, result) {
          err ? reject(err) : resolve(result)
        }
      )
    })
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.log('update query error', e)
    return e
  }
}
