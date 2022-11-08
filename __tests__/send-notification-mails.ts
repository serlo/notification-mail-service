import mysql from 'mysql2/promise'

import { config } from '../src/config'
import { sendEmailToUser } from '../src/mail-service'

beforeEach(async () => {
  const pool = await mysql.createPool(config.db)
  await pool.query(
    `
    UPDATE notification
    SET seen = 1;
    `
  )
})

// TODO: should we prefer fake database, that doesn't depend on db connection?
// Maybe we could include later an e2e test and that would use a real db
test('should not send any e-mails', async () => {
  const response = await sendEmailToUser()
  expect(response[0]).toHaveLength(0)
})

test('should send 3 e-mails', async () => {
  const pool = await mysql.createPool(config.db)

  await pool.query(
    `
    UPDATE notification
    SET seen = 0, email_sent = 0, email = 1
    WHERE id IN (9, 11, 12);
    `
  )
  await pool.end()
  const response = await sendEmailToUser()
  expect(response[0]).toHaveLength(3)
})

test('should send 2 e-mails for 3 notifications', async () => {
  const pool = await mysql.createPool(config.db)

  await pool.query(
      `
    UPDATE notification
    SET seen = 0, email_sent = 0, email = 1
    WHERE id IN (9, 10, 12);
    `
  )
  await pool.end()
  const response = await sendEmailToUser()
  expect(response[0]).toHaveLength(2)
})
