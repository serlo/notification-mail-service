import { notifyUsers, DBConnection } from '../src/mail-service'

const fakeConnection: DBConnection & { emailsSent: boolean } = {
  emailsSent: false,

  async getAllUnsentEmailData() {
    if (this.emailsSent) {
      return Promise.resolve([])
    }

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

const fakeTransporter = {
  shouldFail: false,
  async sendMail() {
    if (this.shouldFail)
      return Promise.resolve({
        response: '450 Requested mail action not taken',
      })

    fakeConnection.emailsSent = true
    return Promise.resolve({ response: '250 Ok' })
  },
}

const fakeApiClient = {
  async fetch() {
    return Promise.reject('implement me')
  },
}

async function notify() {
  return notifyUsers(
    fakeConnection,
    fakeTransporter,
    fakeApiClient,
    'no-reply@serlo.test'
  )
}

beforeEach(() => {
  fakeConnection.emailsSent = false
  fakeTransporter.shouldFail = false
})

test('should send all emails and do not send them again', async () => {
  const result = await notify()

  expect(result).toHaveLength(1)
  expect(result[0]).toStrictEqual(
    JSON.parse(
      '{"body": "<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/><p>actor2 created taxonomy term on  created 2022-10-11 11:50</p><br/>", "email": "email@serlo.org", "ids": ["12", "3"], "user_id": 1, "username": "user"}'
    )
  )

  const expectedEmptyResult = await notify()

  expect(expectedEmptyResult).toHaveLength(0)
})

test('should send all emails and send them again if not delivered', async () => {
  fakeTransporter.shouldFail = true

  const firstResult = await notify()

  expect(firstResult).toHaveLength(1)
  expect(firstResult[0]).toStrictEqual(
    JSON.parse(
      '{"body": "<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/><p>actor2 created taxonomy term on  created 2022-10-11 11:50</p><br/>", "email": "email@serlo.org", "ids": ["12", "3"], "user_id": 1, "username": "user"}'
    )
  )

  const secondResult = await notify()

  expect(secondResult).toHaveLength(1)
  expect(secondResult[0]).toStrictEqual(
    JSON.parse(
      '{"body": "<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/><p>actor2 created taxonomy term on  created 2022-10-11 11:50</p><br/>", "email": "email@serlo.org", "ids": ["12", "3"], "user_id": 1, "username": "user"}'
    )
  )
})
