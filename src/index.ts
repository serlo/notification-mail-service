// eslint-disable-next-line import/no-internal-modules
import { GraphQLClient } from 'graphql-request'
import jwt from 'jsonwebtoken'
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

    // TODO: use env.d.ts
    if (!config.serloApi.graphqlUrl || !config.serloApi.sharedSecret) {
      throw new Error('serlo api env vars have to be set')
    }
    const results = await notifyUsers(
      new MysqlConnection(connection),
      transporter,
      new GraphQLClient(config.serloApi.graphqlUrl, {
        headers: {
          Authorization: `Serlo Service=${createToken({
            secret: config.serloApi.sharedSecret,
          })}`,
        },
      })
    )

    // eslint-disable-next-line no-console
    console.log(results)
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

export function createToken({ secret }: { secret: string }) {
  return jwt.sign({}, secret, {
    expiresIn: '2h',
    audience: 'api.serlo.org',
    issuer: 'notification-email-service',
  })
}
