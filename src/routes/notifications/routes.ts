import { Router } from "express";
import controller from "../../controllers/mail-controller";

const router = Router();

router.get('/mail', controller.SendNotificationEmail);

export default router;
