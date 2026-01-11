import express from "express";
import {
  vendorDashboard,
  addItem,
  listVendorProducts,
  updateItem,
  toggleProductStatus
} from "../controllers/vendorController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* All vendor routes protected */
router.use(authMiddleware, roleMiddleware("VENDOR"));

/* Vendor Dashboard */
router.get("/dashboard", vendorDashboard);

/* Add Item */
router.post("/products", addItem);

/* Vendor Page */
router.get("/products", listVendorProducts);

/* Update Item */
router.put("/products/:id", updateItem);

/* Product Status */
router.patch("/products/:id/status", toggleProductStatus);

export default router;
