import { env } from "../config/env.js";
import { AppError } from "../core/errors/AppError.js";
export function originGuard(request, response, next) { if (["GET","HEAD","OPTIONS"].includes(request.method)) return next(); const origin = request.get("origin"); if (origin && !env.allowedOrigins.includes(origin)) return next(new AppError(403, "Origen no permitido.", "ORIGIN_NOT_ALLOWED")); next(); }
