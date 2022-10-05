import { Router as eRouter  } from "express";
import response from "../middlewares/response";
import emailRoutes from "./email/routes";
export const Router = (eRouter) as () => eRouter;
const router = Router();

router.use('/email', response, emailRoutes);

export default router;