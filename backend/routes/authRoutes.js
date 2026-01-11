import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

/* Signup: Admin / Vendor / User */
router.post("/signup", signup);

/* Login: Admin / Vendor / User */
router.post("/login", login);

export default router;
