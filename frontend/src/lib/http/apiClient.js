import { env } from "../../config/env";
import { PublicApiError } from "../errors/PublicApiError";

const TIMEOUT_MS = 12000;
const CONNECTION_MESSAGE = "Error al conectar con el servidor.";

export async function apiClient(path, options = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${env.apiUrl}${path}`, {
      credentials: "include",
      ...options,
      signal: controller.signal,
      headers: {
        ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
        ...options.headers,
      },
    });

    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("application/json") ? await response.json() : await response.text();

    if (!response.ok) {
      const safeMessage =
        response.status >= 500 ? "No se pudo procesar la solicitud." : payload?.message || "No se pudo completar la operacion.";
      throw new PublicApiError(safeMessage, response.status);
    }

    return payload;
  } catch (error) {
    if (error instanceof PublicApiError) throw error;
    throw new PublicApiError(CONNECTION_MESSAGE, 0);
  } finally {
    window.clearTimeout(timeout);
  }
}
