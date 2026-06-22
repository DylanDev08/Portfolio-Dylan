import bcrypt from "bcryptjs";
import { prisma } from "../../database/prisma.js";
import { AppError } from "../../core/errors/AppError.js";
export async function authenticate(email, password) { const user = await prisma.user.findUnique({ where: { email } }); if (!user || !(await bcrypt.compare(password, user.passwordHash))) throw new AppError(401, "Credenciales incorrectas.", "INVALID_CREDENTIALS"); return { id: user.id, email: user.email, role: user.role }; }
