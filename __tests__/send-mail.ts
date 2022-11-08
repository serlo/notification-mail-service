import { expect } from '@jest/globals'
import { createTransport } from 'nodemailer'

import { sendMail } from '../src/mail-service'

it('should send mail', async () => {
  const mockedTransporter = createTransport()
  const response = await sendMail({
    payload: {
      username: 'testUser',
      email: 'testuser@test.com',
      body: 'text',
    },
    senderEmailAddress: 'no-reply@serlo.org',
    transporter: mockedTransporter,
  })
  expect(response).toBe('250 Ok')
})
