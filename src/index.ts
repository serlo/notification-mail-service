import express, { RequestHandler } from 'express'

import { config } from './config'
import { response } from './response-middleware'
import { sendNotificationEmail } from './send-notification'

const app = express()
app.use(express.json())
app.use('/', response, sendNotificationEmail as RequestHandler)

const port = config.api.port || 4000

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server is running on port ${port}`)
})
