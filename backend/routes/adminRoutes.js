import express from "express";
import {
  dashboard,
  listUsers,
  toggleUserStatus,
  listVendors,
  toggleVendorStatus,
  reports
} from "../controllers/adminController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();


router.use(authMiddleware, roleMiddleware("ADMIN"));


router.get("/dashboard", dashboard);
router.get("/users", listUsers);
router.patch("/users/:id/toggle", toggleUserStatus);

router.get("/vendors", listVendors);
router.patch("/vendors/:id/toggle", toggleVendorStatus);
router.get("/reports", reports);

export default router;
