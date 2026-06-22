import { AppError } from "../core/errors/AppError.js";
export function notFound(request, response, next) { next(new AppError(404, "Ruta no encontrada.", "NOT_FOUND")); }
