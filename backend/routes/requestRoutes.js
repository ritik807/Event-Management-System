import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createRequest, getUserRequests } from "../controllers/requestController.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("user"), createRequest);
router.get("/myrequests", protect, authorizeRoles("user"), getUserRequests);

export default router;
