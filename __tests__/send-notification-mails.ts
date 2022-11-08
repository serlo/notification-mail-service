import { exec } from 'child_process'
// eslint-disable-next-line import/no-internal-modules
import mysql from 'mysql2/promise'

import { config } from '../src/config'
import { sendEmailToUser } from '../src/mail-service'

function execShellCommand(cmd: string) {
  return new Promise((resolve, _) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.warn(error)
      }
      resolve(stdout ? stdout : stderr)
    })
  })
}

beforeEach(async () => {
  // TODO: just for demonstration purpose, remove
  await execShellCommand('yarn mysql:rollback')
})

// TODO: should we prefer fake database, that doesn't depend on db connection?
// Maybe we could include later an e2e test and that would use a real db
test('should not send any e-mails', async () => {
  const connection = await mysql.createConnection(config.db)
  await connection.query('UPDATE notification SET seen = 1;')
  const response = await sendEmailToUser(connection)
  expect(response[0]).toHaveLength(0)
})

test('should send 3 e-mails', async () => {
  const connection = await mysql.createConnection(config.db)

  await connection.execute(
    `
    UPDATE notification
    SET seen = 0, email_sent = 0, email = 1
    WHERE id IN (9, 11, 12);
    `
  )
  // actually unnecessary, just putting here to be sure
  await connection.commit()

  const response = await sendEmailToUser(connection)
  expect(response[0]).toHaveLength(3)
})
