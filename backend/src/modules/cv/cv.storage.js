import { createReadStream } from "node:fs";
import { mkdir, open, rename, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { AppError } from "../../core/errors/AppError.js";
import { env } from "../../config/env.js";

const directory = resolve(process.cwd(), env.CV_STORAGE_DIR);
const filePath = resolve(directory, "CV_Dylan_Salcedo.pdf");

export async function ensureStorage() {
  await mkdir(directory, { recursive: true });
}

async function assertPdfSignature(tempPath) {
  const file = await open(tempPath, "r");
  try {
    const buffer = Buffer.alloc(4);
    const { bytesRead } = await file.read(buffer, 0, 4, 0);
    if (bytesRead !== 4 || buffer.toString("ascii") !== "%PDF") {
      throw new AppError(415, "El archivo debe ser un PDF valido.", "INVALID_CV_FILE");
    }
  } finally {
    await file.close();
  }
}

export async function saveCv(tempPath) {
  await assertPdfSignature(tempPath);
  await ensureStorage();
  await rename(tempPath, filePath);
}

export async function getCv() {
  await ensureStorage();
  await stat(filePath);
  return { stream: createReadStream(filePath), filePath };
}
