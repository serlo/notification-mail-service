import { Router as eRouter  } from "express";
import response from "../middlewares/response";
import notificationRoutes from "./notifications/routes";
export const Router = (eRouter as any) as () => eRouter;
const router = Router();

router.use('/notification', response, notificationRoutes);

export default router;