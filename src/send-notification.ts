import type { Request } from 'express'

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
  const [data] = await sendEmailToUser()

  if (data) {
    res.success?.(statusCode.success, responseMessage.success, data)
  } else {
    res.error?.(
      new Exception(statusCode.serverError, responseMessage.serverError)
    )
  }
}
