import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import {
  getAllUsers,
  deleteUser,
  getRequests,
  updateRequestStatus
} from "../controllers/adminController.js";

const router = express.Router();

// USERS / VENDORS
router.get("/users", protect, authorizeRoles("admin"), getAllUsers);
router.delete("/users/:id", protect, authorizeRoles("admin"), deleteUser);

// REQUESTS
router.get("/requests", protect, authorizeRoles("admin"), getRequests);
router.put("/requests/:id", protect, authorizeRoles("admin"), updateRequestStatus);

export default router;
