import * as service from "./contact.service.js";

export async function create(request, response) {
  await service.createRequest(request.body);
  response.status(201).json({ message: "Solicitud enviada correctamente." });
}

export async function list(request, response) {
  response.json(await service.listRequests());
}

export async function updateStatus(request, response) {
  response.json(await service.updateStatus(request.params.id, request.body.status));
}
