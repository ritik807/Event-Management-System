import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem
} from "../controllers/cartController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* All cart routes protected (USER only) */
router.use(authMiddleware, roleMiddleware("USER"));

/* View Cart */
router.get("/", getCart);

/* Add to Cart */
router.post("/add", addToCart);

/* Update Quantity */
router.patch("/item/:itemId", updateCartItem);

/* Remove Item */
router.delete("/item/:itemId", removeCartItem);

export default router;
