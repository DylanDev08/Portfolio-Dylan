import { body, param } from "express-validator";

const isSafeProjectUrl = (value) => value === "#" || value.startsWith("/") || /^https?:\/\//i.test(value);

export const idValidation = [param("id").isInt({ min: 1 })];

export const projectValidation = [
  body("title").trim().isLength({ min: 2, max: 120 }),
  body("slug").trim().matches(/^[a-z0-9-]+$/).isLength({ max: 140 }),
  body("description").trim().isLength({ min: 10, max: 2000 }),
  body("coverImage").trim().isLength({ min: 1, max: 500 }).custom(isSafeProjectUrl),
  body("liveUrl").trim().isLength({ min: 1, max: 500 }).custom(isSafeProjectUrl),
  body("githubUrl").trim().isLength({ min: 1, max: 500 }).custom(isSafeProjectUrl),
  body("featured").optional().isBoolean().toBoolean(),
  body("order").optional().isInt({ min: 0, max: 10000 }).toInt(),
  body("technologies").isArray({ min: 1, max: 20 }),
  body("technologies.*").trim().isLength({ min: 1, max: 60 }),
];
