import express from "express";
import { checkout } from "../controllers/transactionController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* USER only */
router.use(authMiddleware, roleMiddleware("USER"));

/* Checkout */
router.post("/checkout", checkout);

export default router;
