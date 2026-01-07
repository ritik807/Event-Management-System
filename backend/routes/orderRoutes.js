import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import {
  placeOrder,
  getUserOrders,
  getVendorOrders,
  updateOrderStatus
} from "../controllers/orderController.js";

const router = express.Router();

// User
router.post("/", protect, authorizeRoles("user"), placeOrder);
router.get("/myorders", protect, authorizeRoles("user"), getUserOrders);

// Vendor
router.get("/vendor", protect, authorizeRoles("vendor"), getVendorOrders);
router.put("/vendor", protect, authorizeRoles("vendor"), updateOrderStatus);

export default router;
