import type { Connection } from 'mysql2/promise'

export interface DBConnection {
  fetchUnnotifiedUsers(): Promise<User[]>
  updateNotificationSentStatus(notificationsIds: string[]): Promise<void>
}

export interface User {
  id: number
  username: string
  email: string
}

export class MysqlConnection implements DBConnection {
  connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  async fetchUnnotifiedUsers() {
    const [rows] = await this.connection.execute(
      `SELECT user.username, user.email, user.id          
        FROM notification
        JOIN user ON user.id = notification.user_id 
        WHERE notification.email = 1 AND notification.email_sent = 0 AND notification.seen = 0
        GROUP BY notification.user_id;`
    )
    return rows as User[]
  }

  async updateNotificationSentStatus(notificationsIds: string[]) {
    await this.connection.query(
      `UPDATE notification
        SET email_sent = true
        WHERE id in (${notificationsIds.join().replace("'", ' ')});`
    )
  }
}
