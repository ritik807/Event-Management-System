import express from "express";
import { systemReport } from "../controllers/reportController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* ADMIN ONLY */
router.use(authMiddleware, roleMiddleware("ADMIN"));

router.get("/system", systemReport);

export default router;
