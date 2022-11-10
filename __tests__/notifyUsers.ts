import { notifyUsers, DBConnection } from '../src/mail-service'

test('should send all emails', async () => {
  const fakeConnection: DBConnection = {
    async getAllUnsentEmailData() {
      return Promise.resolve([
        {
          user_id: 1,
          username: 'user',
          email: 'email@serlo.org',
          ids: ['12', '3'],
          body: '<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/><p>actor2 created taxonomy term on  created 2022-10-11 11:50</p><br/>',
        },
      ])
    },
    async updateNotificationSendStatus() {},
  }

  const transporter = {
    async sendMail(_: unknown) {
      return Promise.resolve({ response: '250 Ok' })
    },
  }

  const response = await notifyUsers(
    fakeConnection,
    transporter,
    'no-reply@serlo.test'
  )

  expect(response).toHaveLength(1)
  expect(response[0]).toStrictEqual(
    JSON.parse(
      '{"body": "<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/><p>actor2 created taxonomy term on  created 2022-10-11 11:50</p><br/>", "email": "email@serlo.org", "ids": ["12", "3"], "user_id": 1, "username": "user"}'
    )
  )
})
