import { prisma } from "../../database/prisma.js";

const allowedFields = [
  "firstName",
  "lastName",
  "age",
  "headline",
  "bio",
  "location",
  "email",
  "phone",
  "whatsappUrl",
  "githubUrl",
  "linkedinUrl",
  "profileImage",
  "openToWork",
];

function pickProfileFields(data) {
  return Object.fromEntries(Object.entries(data).filter(([key]) => allowedFields.includes(key)));
}

export const getProfile = () => prisma.profile.findUnique({ where: { id: 1 } });

export const updateProfile = (data) => {
  const profile = pickProfileFields(data);
  return prisma.profile.upsert({ where: { id: 1 }, update: profile, create: { id: 1, ...profile } });
};
