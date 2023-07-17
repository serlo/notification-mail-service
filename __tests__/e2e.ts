import { GraphQLClient } from 'graphql-request'
import { createConnection } from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { createToken } from '../src'
import { config } from '../src/config'
import { notifyUsers, MysqlConnection } from '../src/mail-service'

test('should send all emails and set notifications as sent', async () => {
  const connection = await createConnection(config.dbUri)

  await connection.beginTransaction()

  const mysqlConnection = new MysqlConnection(connection)

  const transporter = createTransport(config.smtpUri, {
    from: config.fromEmail,
  })

  const apiGraphqlClient = new GraphQLClient(
    config.serloApi.graphqlUrl || 'https://api.serlo-staging.dev/graphql',
    {
      headers: {
        Authorization: `Serlo Service=${createToken({
          secret:
            config.serloApi.sharedSecret ||
            'api.serlo.org-notification-email-service-secret',
        })}`,
      },
    },
  )

  const firstResults = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
  )

  expect(firstResults).toHaveLength(3)
  expect(firstResults[0]).toStrictEqual({
    success: true,
    notificationsIds: [11605, 11602],
    userId: 677,
  })

  const secondResults = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
  )
  expect(secondResults).toHaveLength(0)

  await connection.rollback()
  await connection.end()
})
