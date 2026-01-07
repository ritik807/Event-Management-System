import express from "express";
import {
  addProduct,
  updateProduct,
  updateProductStatus,
  getApprovedProducts
} from "../controllers/productController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Vendor
router.post("/", protect, authorizeRoles("vendor"), addProduct);
router.put("/:id", protect, authorizeRoles("vendor"), updateProduct);

// Admin
router.put(
  "/status/:id",
  protect,
  authorizeRoles("admin"),
  updateProductStatus
);

// User
router.get("/", getApprovedProducts);

export default router;
