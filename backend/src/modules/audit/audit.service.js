import { prisma } from "../../database/prisma.js";

const limitText = (value, max) => (typeof value === "string" && value.trim() ? value.trim().slice(0, max) : null);

export function recordVisit(data) {
  return prisma.visit.create({
    data: {
      path: limitText(data.path, 240) || "/",
      referrer: limitText(data.referrer, 500),
      userAgent: limitText(data.userAgent, 500),
      ip: limitText(data.ip, 80),
    },
  });
}

export function recordLoginEvent(data) {
  return prisma.loginEvent.create({
    data: {
      email: limitText(data.email, 160) || "unknown",
      success: Boolean(data.success),
      userAgent: limitText(data.userAgent, 500),
      ip: limitText(data.ip, 80),
    },
  });
}

export function listVisits() {
  return prisma.visit.findMany({ orderBy: { createdAt: "desc" }, take: 80 });
}

export function listLoginEvents() {
  return prisma.loginEvent.findMany({ orderBy: { createdAt: "desc" }, take: 80 });
}
