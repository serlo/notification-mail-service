import mysql from 'mysql2'

import { config } from '../src/config'
import { sendEmailToUser } from '../src/mail-service'

const connection = mysql.createConnection(config.db)
beforeEach(async () => {
  /*
  await connection.execute(
    `
    UPDATE notification
    SET seen = 1;
    `
  )
   */
})

test('should not send any e-mails', async () => {
  const response = await sendEmailToUser()
  expect(response[0]).toHaveLength(0)
})

test('should send 3 e-mails', async () => {
  connection.query(
    `
    UPDATE notification
    SET seen = 0 AND email_sent = 0 AND email = 1
    WHERE id IN (9, 11, 12);
    `
  )
  const response = await sendEmailToUser()
  expect(response[0]).toHaveLength(3)
})
