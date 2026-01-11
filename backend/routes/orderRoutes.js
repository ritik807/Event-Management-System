import express from "express";
import { placeOrder } from "../controllers/orderController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* USER only */
router.use(authMiddleware, roleMiddleware("USER"));

/* Place Order */
router.post("/place", placeOrder);

export default router;
