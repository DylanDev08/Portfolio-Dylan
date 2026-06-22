import { authenticate } from "./auth.service.js";
import { recordLoginEvent } from "../audit/audit.service.js";
import { clearSessionCookie, setSessionCookie, signSession } from "../../utils/session.js";
export async function login(request, response) { try { const user = await authenticate(request.body.email, request.body.password); await recordLoginEvent({ email: request.body.email, success: true, userAgent: request.get("user-agent"), ip: request.ip }); setSessionCookie(response, signSession(user)); response.json({ user }); } catch (error) { await recordLoginEvent({ email: request.body.email, success: false, userAgent: request.get("user-agent"), ip: request.ip }).catch(() => {}); throw error; } }
export async function logout(request, response) { clearSessionCookie(response); response.status(204).end(); }
export async function session(request, response) { response.json({ user: { id: request.auth.sub, role: request.auth.role } }); }
