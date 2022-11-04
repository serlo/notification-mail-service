import { expect, jest, test } from '@jest/globals'
module.exports = require('../__mocks__/nodemailer')
const {sendMail} = require( '../src/mail-service/mail')
//jest.mock('nodemailer')


it('should send mail', async () => {

  return sendMail('testUser', 'testuser@test.com', 'text').then((data: string) => expect(data).toBe('sent'))
})
