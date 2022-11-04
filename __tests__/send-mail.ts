import { expect } from '@jest/globals'

module.exports = require('../__mocks__/nodemailer')
const sendMail = require('../src/mail-service/mail')
//jest.mock('nodemailer')

it('should send mail', () => {
  const response = sendMail('testUser', 'testuser@test.com', 'text')
  expect(response).toBe('sent')
})
