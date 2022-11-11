// eslint-disable-next-line import/no-internal-modules
import { createConnection } from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { config } from '../src/config'
import { notifyUsers, MysqlConnection } from '../src/mail-service'
import { ApiGraphqlClient } from '../src/mail-service/graphql-client'

test.skip('should send all emails and set notifications as sent', async () => {
  const connection = await createConnection(config.db)

  await connection.beginTransaction()

  const mysqlConnection = new MysqlConnection(connection)

  const transporter = createTransport(config.mail)

  const apiGraphqlClient = new ApiGraphqlClient(
    config.serloApiGraphqlUrl || 'https://api.serlo-staging.dev/graphql'
  )
  const firstResult = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
    'no-reply@serlo.test'
  )

  expect(firstResult).toHaveLength(3)
  expect(firstResult[0]).toStrictEqual(
    JSON.parse(
      '{"body": "<p>admin checkout the entity revision on 2019-12-01 18:58</p><br/><p>admin added the entity revision on 2019-12-01 18:58</p><br/>", "email": "124902b1@localhost", "ids": ["11605", "11602"], "user_id": 677, "username": "124902c9"}'
    )
  )

  const secondResult = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
    'no-reply@serlo.test'
  )
  expect(secondResult).toHaveLength(0)

  await connection.rollback()
  await connection.end()
})
