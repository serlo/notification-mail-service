// eslint-disable-next-line import/no-internal-modules
import { createConnection } from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { config } from '../src/config'
import {
  notifyUsers,
  MysqlConnection,
  ApiGraphqlClient,
} from '../src/mail-service'

test.skip('should send all emails and set notifications as sent', async () => {
  const connection = await createConnection(config.db)

  await connection.beginTransaction()

  const mysqlConnection = new MysqlConnection(connection)

  const transporter = createTransport(config.mail)

  const apiGraphqlClient = new ApiGraphqlClient(
    config.serloApiGraphqlUrl || 'https://api.serlo-staging.dev/graphql'
  )
  const firstOutput = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
    'no-reply@serlo.test'
  )

  expect(firstOutput).toHaveLength(3)
  expect(firstOutput[0]).toStrictEqual({
    success: true,
    notificationsIds: [11605, 11602],
    userId: 677,
  })

  const secondOutput = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
    'no-reply@serlo.test'
  )
  expect(secondOutput).toHaveLength(0)

  await connection.rollback()
  await connection.end()
})
