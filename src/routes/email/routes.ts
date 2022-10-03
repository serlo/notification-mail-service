import { Router } from "express";
import controller from "../../controllers/mail-controller";

const router = Router();

router.get('/', controller.SendNotificationEmail);

export default router;
