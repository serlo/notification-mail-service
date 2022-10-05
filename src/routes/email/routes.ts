import { Router } from "express";
import controller from "../../controllers/mail-controller";

const router = Router();

router.get('/', (...args) => controller.sendNotificationEmail(...args));

export default router;
