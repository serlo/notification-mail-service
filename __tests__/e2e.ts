// eslint-disable-next-line import/no-internal-modules
import { createConnection } from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { config } from '../src/config'
import { notifyUsers } from '../src/mail-service'

test('should send all emails and set notifications as sent', async () => {
  const connection = await createConnection(config.db)

  await connection.beginTransaction()
  const transporter = createTransport(config.mail)

  const firstResponse = await notifyUsers(
    connection,
    transporter,
    'no-reply@serlo.test'
  )

  expect(firstResponse).toHaveLength(3)
  // TODO: too much internal testing, abstract
  expect(firstResponse[0]).toBe(
    '{"body": "<p>admin checkout the entity revision on 2019-12-01 18:58</p><br/><p>admin added the entity revision on 2019-12-01 18:58</p><br/>", "email": "124902b1@localhost", "ids": ["11605", "11602"], "user_id": 677, "username": "124902c9"}'
  )

  const secondResponse = await notifyUsers(
    connection,
    transporter,
    'no-reply@serlo.test'
  )
  expect(secondResponse).toHaveLength(0)

  await connection.rollback()
})
