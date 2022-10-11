import { EmailData } from './types'
import mysql from 'mysql'
import config from '../config'

const database = mysql.createConnection(config.db)

export const getAllUnsentEmailData = (): Promise<EmailData[]> | undefined => {
  try {
    return new Promise<EmailData[]>((resolve, reject) => {
      database.query(
        `SELECT n.id, n.user_id, u.username, u.email, el.event_id, el.date, i.name as domain, u2.username as actor_name,
            epn.name as epn_name, eps.value            
            FROM notification n
            INNER JOIN user u ON u.id = n.user_id 
            INNER JOIN notification_event ne ON n.id = ne.notification_id
            INNER JOIN event_log el ON el.id = ne.event_log_id
            JOIN event e ON e.id = el.event_id
            JOIN instance i on i.id = el.instance_id
            LEFT JOIN event_parameter ep ON ep.log_id = el.id
            LEFT JOIN event_parameter_name epn ON epn.id = ep.name_id
            LEFT JOIN event_parameter_string eps ON eps.event_parameter_id = ep.id
            LEFT JOIN event_parameter_uuid epu ON epu.event_parameter_id = ep.id
            INNER JOIN user u2 ON el.actor_id = u2.id
            INNER JOIN subscription s ON s.user_id = u.id AND epu.uuid_id = s.uuid_id
            WHERE n.email=1 and n.email_sent = 0 and n.seen = 0;`,
        function (err, result) {
          err ? reject(err) : resolve(result)
        }
      )
    })
  } catch (e) {
    console.log('get query error', e)
  }
}

export const updateNotificationSendStatus = (notificationsIds: string[]) => {
  let notificationIds = notificationsIds.join()
  notificationIds = notificationIds.replace("'", ' ')

  try {
    return new Promise((resolve, reject) => {
      database.query(
        `UPDATE notification 
            SET email_sent = true
            WHERE id in (${notificationsIds});`,
        function (err, result) {
          err ? reject(err) : resolve(result)
        }
      )
    })
  } catch (e) {
    console.log('update query error', e)
    return e
  }
}
