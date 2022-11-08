// eslint-disable-next-line import/no-internal-modules
import mysql, { Connection } from 'mysql2/promise'
import { Transporter } from 'nodemailer'

import { config } from '../src/config'
import { sendEmailToUser } from '../src/mail-service'

// FIXME: skipping all test until we refactor the file

// TODO: use fake database responses

// beforeEach(async () => {
//   const pool = mysql.createPool(config.db)
//   await pool.query(
//     `
//     UPDATE notification
//     SET seen = 1;
//     `
//   )
// })

jest.mock('mysql2/promise')

test.skip('should not send any e-mails', async () => {
  const response = await sendEmailToUser(
    {} as Connection,
    {} as Transporter,
    'skipped'
  )
  expect(response[0]).toHaveLength(0)
})

test.skip('should send 3 e-mails', async () => {
  const pool = mysql.createPool(config.db)

  await pool.query(
    `
    UPDATE notification
    SET seen = 0, email_sent = 0, email = 1
    WHERE id IN (9, 11, 12);
    `
  )
  await pool.end()
  const response = await sendEmailToUser(
    {} as Connection,
    {} as Transporter,
    'skipped'
  )

  expect(response[0]).toHaveLength(3)
})

test.skip('should send 2 e-mails for 3 notifications', async () => {
  const pool = mysql.createPool(config.db)

  await pool.query(
    `
    UPDATE notification
    SET seen = 0, email_sent = 0, email = 1
    WHERE id IN (9, 10, 12);
    `
  )
  await pool.end()
  const response = await sendEmailToUser(
    {} as Connection,
    {} as Transporter,
    'skipped'
  )

  expect(response[0]).toHaveLength(2)
})
