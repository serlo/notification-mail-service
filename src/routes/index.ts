import { Router } from 'express'
import response from '../middlewares/response'
import controller from '../controllers/mail-controller'

const router = Router()

router.get('/', response, (...args) =>
  controller.sendNotificationEmail(...args)
)

export default router
