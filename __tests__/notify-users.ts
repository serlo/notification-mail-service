import type { Transporter } from 'nodemailer'

import { getNotificationsQueryResponse } from '../__fixtures__/notifications'
import { notifyUsers, DBConnection, User } from '../src/mail-service'

const unnotifiedUser = {
  id: 2,
  username: 'user',
  email: 'fakeemail@serlo.dev',
}
const notificationsIds = getNotificationsQueryResponse.notifications.nodes.map(
  (notification) => notification.id
)

const fakeConnection: DBConnection & { emailsSent: boolean } = {
  emailsSent: false,

  async fetchUnnotifiedUsers() {
    if (this.emailsSent) {
      return Promise.resolve([])
    }

    return Promise.resolve([unnotifiedUser] as User[])
  },

  async updateNotificationSentStatus() {},
}

const fakeTransporter = {
  shouldFail: false,
  async sendMail() {
    if (this.shouldFail) {
      return Promise.resolve({
        response: '450 Requested mail action not taken',
      })
    }
    fakeConnection.emailsSent = true
    return Promise.resolve({ response: '250 Ok' })
  },
} as { shouldFail: boolean } as Transporter & { shouldFail: boolean }

const fakeApiClient = {
  request() {
    return Promise.resolve({
      uuid: {
        __typename: 'User',
        language: 'en',
      },
      ...getNotificationsQueryResponse,
    })
  },
}

async function notify() {
  return notifyUsers(fakeConnection, fakeTransporter, fakeApiClient)
}

beforeEach(() => {
  fakeConnection.emailsSent = false
  fakeTransporter.shouldFail = false
})

test('should send all emails and do not send them again', async () => {
  const results = await notify()

  expect(results).toHaveLength(1)
  expect(results[0]).toStrictEqual({
    success: true,
    notificationsIds,
    userId: unnotifiedUser.id,
  })

  const expectedEmptyResults = await notify()

  expect(expectedEmptyResults).toHaveLength(0)
})

test('should send all emails and send them again if not delivered', async () => {
  fakeTransporter.shouldFail = true

  const expectedResults = {
    notificationsIds,
    reason: '450 Requested mail action not taken',
    success: false,
    userId: unnotifiedUser.id,
  }

  const firstResults = await notify()

  expect(firstResults).toHaveLength(1)
  expect(firstResults[0]).toStrictEqual(expectedResults)

  const secondResults = await notify()

  expect(secondResults).toHaveLength(1)
  expect(secondResults[0]).toStrictEqual(expectedResults)
})
