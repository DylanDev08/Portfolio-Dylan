import { Router } from "express";
import { asyncHandler } from "../../core/asyncHandler.js";
import { requireAdmin, requireAuth } from "../../middleware/auth.js";
import { validate } from "../../middleware/validate.js";
import { read, update } from "./profile.controller.js";
import { profileValidation } from "./profile.validation.js";

const router = Router();

router.get("/", asyncHandler(read));
router.put("/", requireAuth, requireAdmin, profileValidation, validate, asyncHandler(update));

export default router;
