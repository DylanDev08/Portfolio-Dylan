import { AppError } from "../core/errors/AppError.js";
import { COOKIE_NAME, verifySession } from "../utils/session.js";
export function requireAuth(request, response, next) { const token = request.cookies?.[COOKIE_NAME]; if (!token) return next(new AppError(401, "Sesión requerida.", "AUTH_REQUIRED")); try { request.auth = verifySession(token); next(); } catch { next(new AppError(401, "La sesión venció o no es válida.", "INVALID_SESSION")); } }
export function requireAdmin(request, response, next) { if (request.auth?.role !== "ADMIN") return next(new AppError(403, "No tenés permisos para realizar esta acción.", "FORBIDDEN")); next(); }
