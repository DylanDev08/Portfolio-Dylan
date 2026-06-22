export function errorHandler(error, request, response, next) {
  if (response.headersSent) return next(error);

  const isUploadLimit = error?.code === "LIMIT_FILE_SIZE";
  const isUploadCount = error?.code === "LIMIT_FILE_COUNT" || error?.code === "LIMIT_UNEXPECTED_FILE";
  const isOperational = Boolean(error.isOperational || isUploadLimit || isUploadCount);
  const status = error.isOperational ? error.statusCode : isUploadLimit ? 413 : isUploadCount ? 422 : 500;
  const message = error.isOperational
    ? error.publicMessage
    : isUploadLimit
      ? "El archivo supera el tamaño permitido."
      : isUploadCount
        ? "La carga del archivo no es válida."
        : "No se pudo procesar la solicitud.";

  if (!isOperational) {
    console.error(JSON.stringify({ level: "error", requestId: request.id, code: "UNEXPECTED_SERVER_ERROR" }));
  }

  response.status(status).json({
    message,
    ...(error.details ? { errors: error.details } : {}),
    requestId: request.id,
  });
}
