import express from 'express'
import { GraphQLClient } from 'graphql-request'
import type { Server } from 'http'
import * as t from 'io-ts'
import { createConnection } from 'mysql2/promise'
import { createTransport } from 'nodemailer'

import { apiReponses } from '../__fixtures__/api-responses'
import { config } from '../src/config'
import { notifyUsers, MysqlConnection } from '../src/mail-service'
import { createToken } from '../src/utils'

const apiPort = 3003
let api: ReturnType<typeof express>
let server: Server

beforeAll((done) => {
  api = express()
  api.use(express.json())

  api.post('/graphql', (req, res) => {
    if (!t.type({ variables: t.type({ userId: t.number }) }).is(req.body)) {
      res.sendStatus(400)
      return
    }

    const data = apiReponses[req.body.variables.userId]

    if (data != null) {
      res.json({ data })
    } else {
      res.sendStatus(400)
    }
  })

  server = api.listen(apiPort, done)
})

afterAll((done) => {
  server.close(done)
})

test('should send all emails and set notifications as sent', async () => {
  const connection = await createConnection(config.dbUri)

  await connection.beginTransaction()

  const mysqlConnection = new MysqlConnection(connection)

  const transporter = createTransport(config.smtpUri, {
    from: config.fromEmail,
  })

  const token = createToken({ secret: config.serloApi.sharedSecret })
  const apiGraphqlClient = new GraphQLClient(
    `http://localhost:${apiPort}/graphql`,
    { headers: { Authorization: `Serlo Service=${token}` } },
  )

  const firstResults = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
  )

  expect(firstResults).toHaveLength(3)
  expect(firstResults[0]).toStrictEqual({
    success: true,
    notificationsIds: [11605, 11602],
    userId: 677,
  })

  const secondResults = await notifyUsers(
    mysqlConnection,
    transporter,
    apiGraphqlClient,
  )
  expect(secondResults).toHaveLength(0)

  await connection.rollback()
  await connection.end()
})
