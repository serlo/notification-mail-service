import type { Request } from 'express'
// eslint-disable-next-line import/no-internal-modules
import mysql from 'mysql2/promise'

import { config } from './config'
import { sendEmailToUser } from './mail-service'
import { Exception, AppResponse } from './utils'

enum statusCode {
  success = 200,
  serverError = 500,
}

enum responseMessage {
  success = 'Success',
  serverError = 'Something went wrong. Please try again later.',
}

export async function sendNotificationEmail(_: Request, res: AppResponse) {
  // TODO: handle connection error, retry
  const connection = await mysql.createConnection(config.db)

  const [data] = await sendEmailToUser(connection)

  if (data) {
    res.success?.(statusCode.success, responseMessage.success, data)
  } else {
    res.error?.(
      new Exception(statusCode.serverError, responseMessage.serverError)
    )
  }
}
