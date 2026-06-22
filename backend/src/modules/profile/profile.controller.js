import * as service from "./profile.service.js";
export async function read(request, response) { response.json(await service.getProfile()); }
export async function update(request, response) { response.json(await service.updateProfile(request.body)); }
