/* eslint-disable no-console */
import { sendEmailToUser } from './mail-service'

void sendEmailToUser()
  .then(([data, error]) => {
    if (data) {
      console.log({
        success: true,
        data,
      })
    } else {
      console.error({
        success: false,
        error,
      })
    }
    process.exit()
  })
  .catch(() => {
    process.exit(1)
  })
