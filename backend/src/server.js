import app from "./app.js"; import { env } from "./config/env.js"; import { prisma } from "./database/prisma.js"; import { ensureStorage } from "./modules/cv/cv.storage.js";
await ensureStorage(); const server=app.listen(env.PORT,()=>console.log(`Servidor iniciado en el puerto ${env.PORT}.`));
async function shutdown(){server.close(async()=>{await prisma.$disconnect();process.exit(0)})} process.on("SIGTERM",shutdown);process.on("SIGINT",shutdown);
