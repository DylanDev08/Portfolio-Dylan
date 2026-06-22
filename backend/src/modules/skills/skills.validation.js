import { body, param } from "express-validator";

export const idValidation = [param("id").isInt({ min: 1 })];

export const skillValidation = [
  body("name").trim().isLength({ min: 1, max: 60 }),
  body("category").isIn(["FRONTEND", "BACKEND", "DATABASE", "TOOLS", "SOFT_SKILL"]),
  body("level").isInt({ min: 1, max: 100 }).toInt(),
  body("order").optional().isInt({ min: 0, max: 10000 }).toInt(),
];
