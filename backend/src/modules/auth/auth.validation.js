import { body } from "express-validator";
export const loginValidation = [body("email").isEmail().normalizeEmail(), body("password").isString().isLength({ min: 10, max: 200 })];
