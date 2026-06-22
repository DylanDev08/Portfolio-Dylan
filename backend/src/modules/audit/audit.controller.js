import { recordVisit, listLoginEvents, listVisits } from "./audit.service.js";

export async function createVisit(request, response) {
  await recordVisit({
    path: request.body?.path,
    referrer: request.body?.referrer,
    userAgent: request.get("user-agent"),
    ip: request.ip,
  });
  response.status(204).end();
}

export async function visits(request, response) {
  response.json(await listVisits());
}

export async function logins(request, response) {
  response.json(await listLoginEvents());
}
