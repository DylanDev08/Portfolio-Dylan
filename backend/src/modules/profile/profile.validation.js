import { body } from "express-validator";

const isSafeUrl = (value) => value === "#" || value.startsWith("/") || /^https?:\/\//i.test(value);

export const profileValidation = [
  body("firstName").optional().trim().isLength({ min: 1, max: 80 }),
  body("lastName").optional().trim().isLength({ min: 1, max: 80 }),
  body("age").optional().isInt({ min: 16, max: 100 }).toInt(),
  body("headline").optional().trim().isLength({ min: 2, max: 160 }),
  body("bio").optional().trim().isLength({ min: 20, max: 3000 }),
  body("location").optional().trim().isLength({ min: 2, max: 160 }),
  body("email").optional().isEmail().normalizeEmail(),
  body("phone").optional().trim().isLength({ min: 5, max: 40 }),
  body("whatsappUrl").optional().trim().isLength({ min: 1, max: 500 }).custom(isSafeUrl),
  body("githubUrl").optional().trim().isLength({ min: 1, max: 500 }).custom(isSafeUrl),
  body("linkedinUrl").optional().trim().isLength({ min: 1, max: 500 }).custom(isSafeUrl),
  body("profileImage").optional({ nullable: true }).trim().isLength({ min: 1, max: 500 }).custom(isSafeUrl),
  body("openToWork").optional().isBoolean().toBoolean(),
];
