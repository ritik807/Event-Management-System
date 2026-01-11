import express from "express";
import {
  userPortal,
  listProducts,
  listProductsByVendor,
  userOrders
} from "../controllers/userController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* All user routes protected */
router.use(authMiddleware, roleMiddleware("USER"));

/* User Portal */
router.get("/portal", userPortal);

/* Products */
router.get("/products", listProducts);
router.get("/products/vendor/:vendorId", listProductsByVendor);

/* Order Status (User) */
router.get("/orders", userOrders);

export default router;
