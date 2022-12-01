import type { Connection } from 'mysql2/promise'

import type { EmailData } from './email-data'

export interface DBConnection {
  fetchUnsentNotificationData(): Promise<EmailData[]>
  updateNotificationSendStatus(notificationsIds: string[]): Promise<void>
}

export class MysqlConnection implements DBConnection {
  connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  async fetchUnsentNotificationData() {
    const [rows] = await this.connection.execute(
      `SELECT GROUP_CONCAT(notification.id) as notification_ids, notification.user_id, user.username, user.email, 
          GROUP_CONCAT(event_log.event_id) as event_ids, GROUP_CONCAT(event_log.date) as dates, GROUP_CONCAT(actor.username) as actor_names          
        FROM notification
        JOIN user ON user.id = notification.user_id 
        JOIN notification_event ON notification.id = notification_event.notification_id
        JOIN event_log ON event_log.id = notification_event.event_log_id
        JOIN event ON event.id = event_log.event_id
        LEFT JOIN event_parameter ON event_parameter.log_id =  event_log.id
        LEFT JOIN event_parameter_uuid ON event_parameter_uuid.event_parameter_id = event_parameter.id
        JOIN user actor ON event_log.actor_id = actor.id
        JOIN subscription ON subscription.user_id = user.id AND event_parameter_uuid.uuid_id = subscription.uuid_id
        WHERE notification.email = 1 AND notification.email_sent = 0 AND notification.seen = 0
        GROUP BY notification.user_id;`
    )
    return rows as EmailData[]
  }

  async updateNotificationSendStatus(notificationsIds: string[]) {
    await this.connection.query(
      `UPDATE notification
        SET email_sent = true
        WHERE id in (${notificationsIds.join().replace("'", ' ')});`
    )
  }
}
