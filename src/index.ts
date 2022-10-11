import express from 'express'
import config from './config'
import response from './response-middleware'
import { sendNotificationEmail } from './send-notification'

const router = express.Router()

router.get('/', response, (...args) => sendNotificationEmail(...args))

const app = express()
app.use(express.json())
app.use('/', router)

const port = config.api.port || 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
