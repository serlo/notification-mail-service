import mysql from 'mysql2'

import { config } from '../src/config'
import { sendEmailToUser } from '../src/mail-service'

beforeEach(async () => {
  // TODO: delete?
  /*
  await connection.execute(
    `
    UPDATE notification
    SET seen = 1;
    `
  )
   */
})

// TODO: should we prefer fake database, that doesn't depend on db connection?
// Maybe we could include later an e2e test and that would use a real db
test('should not send any e-mails', () => {
  const connection = mysql.createPool(config.db)
  connection.query('', async function () {
    const response = await sendEmailToUser()
    expect(response[0]).toHaveLength(0)
  })
})

test('should send 3 e-mails', () => {
  const connection = mysql.createPool(config.db)

  connection.query(
    `
    UPDATE notification
    SET seen = 0 AND email_sent = 0 AND email = 1
    WHERE id IN (9, 11, 12);
    `,
    async function () {
      const response = await sendEmailToUser()
      expect(response[0]).toHaveLength(3)
    }
  )
})
