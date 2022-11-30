// eslint-disable-next-line import/no-internal-modules
import mysql from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { config } from './config'
import { MysqlConnection, notifyUsers } from './mail-service'

void run()

let exitCode = 0

async function run() {
  if (!config.from_email) {
    throw new Error('config.from_email is not set')
  }

  let connection: mysql.Connection | null = null

  try {
    // TODO: retry to connect
    connection = await mysql.createConnection(config.db)

    const transporter = createTransport(config.mail)

    const data = await notifyUsers(
      new MysqlConnection(connection),
      transporter,
      config.from_email
    )

    // eslint-disable-next-line no-console
    console.log({
      success: true,
      data,
    })
    exitCode = 0
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error({
      success: false,
      error,
    })
    exitCode = 1
  } finally {
    if (connection) await connection.end()
    process.exit(exitCode)
  }
}
