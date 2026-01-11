import express from "express";
import {
  createRequest,
  userRequests,
  vendorRequests,
  updateRequestStatus
} from "../controllers/requestController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import Vendor from "../models/Vendor.js";

const router = express.Router();

/* =========================
   USER ROUTES
   ========================= */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("USER"),
  createRequest
);

router.get(
  "/my",
  authMiddleware,
  roleMiddleware("USER"),
  userRequests
);

/* =========================
   VENDOR ROUTES
   ========================= */
router.get(
  "/vendor",
  authMiddleware,
  roleMiddleware("VENDOR"),
  async (req, res, next) => {
    const vendor = await Vendor.findOne({ user: req.user.id });
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }
    req.vendorId = vendor._id;
    next();
  },
  vendorRequests
);

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("VENDOR"),
  updateRequestStatus
);

export default router;
