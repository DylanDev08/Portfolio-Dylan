import { PublicApiError } from "./PublicApiError";

const FALLBACK_MESSAGE = "No se pudo completar la operación.";
const CONNECTION_MESSAGE = "Error al conectar con el servidor.";

export function getPublicErrorMessage(error) {
  if (!error) return FALLBACK_MESSAGE;
  if (error.status === 0 || error instanceof TypeError) return CONNECTION_MESSAGE;
  if (error instanceof PublicApiError) return error.message || FALLBACK_MESSAGE;
  return FALLBACK_MESSAGE;
}
