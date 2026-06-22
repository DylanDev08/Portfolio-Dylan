import rateLimit from "express-rate-limit";
const base = { standardHeaders: "draft-7", legacyHeaders: false, message: { message: "Demasiadas solicitudes. Intentá nuevamente más tarde." } };
export const globalLimiter = rateLimit({ ...base, windowMs: 15 * 60 * 1000, limit: 300 });
export const loginLimiter = rateLimit({ ...base, windowMs: 15 * 60 * 1000, limit: 8, skipSuccessfulRequests: true });
export const contactLimiter = rateLimit({ ...base, windowMs: 60 * 60 * 1000, limit: 8 });
