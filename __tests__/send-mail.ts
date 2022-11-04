import { expect } from '@jest/globals'

import { sendMail } from '../src/mail-service/mail'

it('should send mail', async () => {
  const response = await sendMail('testUser', 'testuser@test.com', 'text')
  expect(response).toBe('250 Ok')
})
