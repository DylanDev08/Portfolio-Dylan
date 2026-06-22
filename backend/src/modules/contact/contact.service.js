import { prisma } from "../../database/prisma.js";

const contactFields = ["name", "email", "phone", "company", "projectType", "message", "budget"];

function pickContactFields(data) {
  return Object.fromEntries(Object.entries(data).filter(([key]) => contactFields.includes(key)));
}

export const createRequest = (data) => prisma.contactRequest.create({ data: pickContactFields(data) });
export const listRequests = () => prisma.contactRequest.findMany({ orderBy: { createdAt: "desc" } });
export const updateStatus = (id, status) => prisma.contactRequest.update({ where: { id }, data: { status } });
