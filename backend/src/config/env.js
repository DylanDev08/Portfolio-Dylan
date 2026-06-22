import "dotenv/config";
import { z } from "zod";
const schema = z.object({ NODE_ENV: z.enum(["development","test","production"]).default("development"), PORT: z.coerce.number().int().positive().default(4000), DATABASE_URL: z.string().min(1), SESSION_SECRET: z.string().min(32), ALLOWED_ORIGINS: z.string().min(1), CV_STORAGE_DIR: z.string().default("storage/cv") });
const result = schema.safeParse(process.env);
if (!result.success) throw new Error("La configuración del servidor es inválida.");
export const env = Object.freeze({ ...result.data, allowedOrigins: result.data.ALLOWED_ORIGINS.split(",").map((value) => value.trim()).filter(Boolean), isProduction: result.data.NODE_ENV === "production" });
