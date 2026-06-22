import { validationResult } from "express-validator";
import { AppError } from "../core/errors/AppError.js";
export function validate(request, response, next) { const errors = validationResult(request); if (errors.isEmpty()) return next(); const error = new AppError(422, "Los datos enviados no son válidos.", "VALIDATION_ERROR"); error.details = errors.array().map(({ path, msg }) => ({ field: path, message: msg })); next(error); }
