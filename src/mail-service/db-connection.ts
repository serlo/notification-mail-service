import type { Connection, RowDataPacket } from 'mysql2/promise'

export class MysqlConnection implements DBConnection {
  connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  async fetchUnnotifiedUsers() {
    const [users] = await this.connection.query<User[]>(
      `SELECT username, user.email, user.id
        FROM notification
        JOIN user ON user.id = notification.user_id
        WHERE notification.email = 1 AND notification.email_sent = 0 AND notification.seen = 0
        GROUP BY notification.user_id;`,
    )
    return users
  }

  async updateNotificationSentStatus(notificationsIds: number[]) {
    await this.connection.query(
      `UPDATE notification
        SET email_sent = true
        WHERE id in (${notificationsIds.join(',')});`,
    )
  }
}

export interface DBConnection {
  fetchUnnotifiedUsers(): Promise<User[]>
  updateNotificationSentStatus(notificationsIds: number[]): Promise<void>
}

interface User extends RowDataPacket {
  id: number
  username: string
  email: string
}
