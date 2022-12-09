import type { Transporter } from 'nodemailer'

import { notifyUsers, DBConnection } from '../src/mail-service'
import {Instance} from "../src/gql/graphql";

const fakeConnection: DBConnection & { emailsSent: boolean } = {
  emailsSent: false,

  async getAllUnsentEmailData() {
    if (this.emailsSent) {
      return Promise.resolve([])
    }

    return Promise.resolve([
      {
        id: 1,
        username: 'user',
        email: 'fakeemail@serlo.dev',
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
} as { shouldFail: boolean } as unknown as Transporter & { shouldFail: boolean }

const fakeApiClient = {
  async fetch() {
    return Promise.resolve({
        nodes: [
          {
            id: 11605,
            event: {
              __typename: 'CheckoutRevisionNotificationEvent',
              date: '2019-12-01T18:58:08+01:00',
              actor: { username: 'admin' },
              id: 23,
              instance: Instance.De,
              objectId: 34
            },
          },
          {
            id: 11602,
            event: {
              __typename: 'CreateEntityRevisionNotificationEvent',
              date: '2019-12-01T18:58:08+01:00',
              actor: { username: 'admin' },
              id: 23,
              instance: Instance.De,
              objectId: 34
            },
          },
        ],
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
  const output = await notify()

  expect(output).toHaveLength(1)
  expect(output[0]).toStrictEqual({
    success: true,
    notificationsIds: [11605, 11602],
    userId: 1,
  })

  const expectedEmptyOutput = await notify()

  expect(expectedEmptyOutput).toHaveLength(0)
})

test('should send all emails and send them again if not delivered', async () => {
  fakeTransporter.shouldFail = true

  const expectedOutput = {
    notificationsIds: [11605, 11602],
    reason: '450 Requested mail action not taken',
    success: false,
    userId: 1,
  }

  const firstOutput = await notify()

  expect(firstOutput).toHaveLength(1)
  expect(firstOutput[0]).toStrictEqual(expectedOutput)

  const secondOutput = await notify()

  expect(secondOutput).toHaveLength(1)
  expect(secondOutput[0]).toStrictEqual(expectedOutput)
})
