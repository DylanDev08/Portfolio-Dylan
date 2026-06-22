import { Router } from "express";
import { asyncHandler } from "../../core/asyncHandler.js";
import { requireAuth } from "../../middleware/auth.js";
import { loginLimiter } from "../../middleware/rateLimiters.js";
import { validate } from "../../middleware/validate.js";
import { login, logout, session } from "./auth.controller.js";
import { loginValidation } from "./auth.validation.js";
const router = Router(); router.post("/login", loginLimiter, loginValidation, validate, asyncHandler(login)); router.post("/logout", requireAuth, asyncHandler(logout)); router.get("/session", requireAuth, asyncHandler(session)); export default router;
