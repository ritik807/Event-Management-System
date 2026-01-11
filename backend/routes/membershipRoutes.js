import express from "express";
import {
  addMembership,
  getMemberships,
  updateMembership,
  toggleMembership
} from "../controllers/membershipController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* ADMIN ONLY */
router.use(authMiddleware, roleMiddleware("ADMIN"));

router.post("/", addMembership);
router.get("/", getMemberships);
router.put("/:id", updateMembership);
router.patch("/:id/toggle", toggleMembership);

export default router;
