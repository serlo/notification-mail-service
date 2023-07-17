import { GraphQLClient } from 'graphql-request'
import mysql from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { config } from './config'
import { MysqlConnection, notifyUsers, SucceededResult } from './mail-service'
import { createToken } from './utils'

void run()

async function run() {
  let connection: mysql.Connection | null = null
  let exitCode = 0

  const start = new Date()

  try {
    // TODO: retry to connect
    connection = await mysql.createConnection(config.dbUri)
    const transporter = createTransport(config.smtpUri, {
      from: config.fromEmail,
    })
    const token = createToken({ secret: config.serloApi.sharedSecret })
    const results = await notifyUsers(
      new MysqlConnection(connection),
      transporter,
      new GraphQLClient(config.serloApi.graphqlUrl, {
        headers: { Authorization: `Serlo Service=${token}` },
      }),
    )

    const finish = new Date()

    const failedResults = results.filter((result) => result.success === false)
    // eslint-disable-next-line no-console
    console.log({
      start,
      finish,
      total: results.length,
      'notified users': results
        .filter((result): result is SucceededResult => result.success === true)
        .map((result) => result.userId),
      'number of failures': failedResults.length,
      ...(failedResults.length > 0 ? { failures: failedResults } : {}),
    })
    exitCode = 0
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error({ error })
    exitCode = 1
  } finally {
    if (connection) await connection.end()
  }

  process.exit(exitCode)
}
