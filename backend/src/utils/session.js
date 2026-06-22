import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
const COOKIE_NAME = "portfolio_session";
export function signSession(user) { return jwt.sign({ sub: user.id, role: user.role }, env.SESSION_SECRET, { expiresIn: "2h", issuer: "portfolio-api", audience: "portfolio-admin" }); }
export function verifySession(token) { return jwt.verify(token, env.SESSION_SECRET, { issuer: "portfolio-api", audience: "portfolio-admin" }); }
export function setSessionCookie(response, token) { response.cookie(COOKIE_NAME, token, { httpOnly: true, secure: env.isProduction, sameSite: env.isProduction ? "strict" : "lax", maxAge: 2 * 60 * 60 * 1000, path: "/" }); }
export function clearSessionCookie(response) { response.clearCookie(COOKIE_NAME, { httpOnly: true, secure: env.isProduction, sameSite: env.isProduction ? "strict" : "lax", path: "/" }); }
export { COOKIE_NAME };
