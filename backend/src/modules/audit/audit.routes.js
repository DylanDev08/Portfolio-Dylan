import { Router } from "express";
import { body } from "express-validator";
import { asyncHandler } from "../../core/asyncHandler.js";
import { requireAdmin, requireAuth } from "../../middleware/auth.js";
import { validate } from "../../middleware/validate.js";
import * as controller from "./audit.controller.js";

const router = Router();

router.post(
  "/visit",
  body("path").optional().isString().isLength({ max: 240 }),
  body("referrer").optional({ nullable: true }).isString().isLength({ max: 500 }),
  validate,
  asyncHandler(controller.createVisit),
);

router.get("/visits", requireAuth, requireAdmin, asyncHandler(controller.visits));
router.get("/logins", requireAuth, requireAdmin, asyncHandler(controller.logins));

export default router;
