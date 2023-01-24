// eslint-disable-next-line import/no-internal-modules
import { GraphQLClient } from 'graphql-request'
import mysql from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { config } from './config'
import { MysqlConnection, notifyUsers } from './mail-service'

void run()

let exitCode = 0

async function run() {
  let connection: mysql.Connection | null = null

  try {
    // TODO: retry to connect
    connection = await mysql.createConnection(config.db)
    const transporter = createTransport(config.smtp, { from: config.fromEmail })

    if (!config.serloApiGraphqlUrl) {
      throw new Error('SERLO_API_GRAPHQL_URL has to be set')
    }
    const results = await notifyUsers(
      new MysqlConnection(connection),
      transporter,
      new GraphQLClient(config.serloApiGraphqlUrl)
    )

    // eslint-disable-next-line no-console
    console.log(results)
    // TODO: should it exit with error code if one notification has success=false?
    exitCode = 0
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error({
      error: error as Error,
    })
    exitCode = 1
  } finally {
    if (connection) await connection.end()
    process.exit(exitCode)
  }
}
