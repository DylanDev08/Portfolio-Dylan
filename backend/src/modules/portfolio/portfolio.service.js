import { z } from "zod";
import { AppError } from "../../core/errors/AppError.js";
import { prisma } from "../../database/prisma.js";
import { listProjects } from "../projects/projects.service.js";

const skillCategories = ["FRONTEND", "BACKEND", "DATABASE", "TOOLS", "SOFT_SKILL"];

const text = (min, max) => z.string().trim().min(min).max(max);
const optionalText = (max) => z.string().trim().max(max).optional().nullable();
const safeUrl = z
  .string()
  .trim()
  .max(500)
  .refine((value) => value === "#" || value.startsWith("/") || /^https?:\/\//i.test(value), "URL no valida.");

const profileSchema = z
  .object({
    firstName: text(1, 80),
    lastName: text(1, 80),
    age: z.coerce.number().int().min(16).max(100),
    headline: text(2, 160),
    bio: text(20, 3000),
    location: text(2, 160),
    email: z.string().trim().email().max(160),
    phone: text(5, 40),
    whatsappUrl: safeUrl,
    githubUrl: safeUrl,
    linkedinUrl: safeUrl,
    profileImage: safeUrl.optional().nullable(),
    openToWork: z.boolean().optional(),
  })
  .strict();

const skillSchema = z
  .object({
    name: text(1, 60),
    category: z.enum(skillCategories),
    level: z.coerce.number().int().min(1).max(100),
    order: z.coerce.number().int().min(0).max(10000).optional(),
  })
  .strict();

const projectSchema = z
  .object({
    title: text(2, 120),
    slug: z.string().trim().regex(/^[a-z0-9-]+$/).max(140),
    description: text(10, 2000),
    coverImage: safeUrl,
    liveUrl: safeUrl,
    githubUrl: safeUrl,
    featured: z.boolean().optional(),
    order: z.coerce.number().int().min(0).max(10000).optional(),
    technologies: z.array(text(1, 60)).max(20).default([]),
  })
  .strict();

const workExperienceSchema = z
  .object({
    company: text(2, 120),
    role: text(2, 160),
    durationLabel: text(1, 80),
    description: text(10, 2000),
    order: z.coerce.number().int().min(0).max(10000).optional(),
  })
  .strict();

const educationSchema = z
  .object({
    institution: text(2, 160),
    title: text(2, 180),
    period: text(1, 80),
    description: optionalText(1200),
    order: z.coerce.number().int().min(0).max(10000).optional(),
  })
  .strict();

const importSchema = z
  .object({
    profile: profileSchema.optional(),
    skills: z.array(skillSchema).max(100).optional(),
    projects: z.array(projectSchema).max(60).optional(),
    workExperiences: z.array(workExperienceSchema).max(30).optional(),
    education: z.array(educationSchema).max(30).optional(),
  })
  .strict();

const forbiddenKeys = new Set([
  "user",
  "users",
  "role",
  "password",
  "passwordHash",
  "token",
  "cookie",
  "session",
  "DATABASE_URL",
  "SESSION_SECRET",
  "ADMIN_PASSWORD",
]);

function hasForbiddenKey(value) {
  if (!value || typeof value !== "object") return false;
  if (Array.isArray(value)) return value.some(hasForbiddenKey);
  return Object.entries(value).some(([key, child]) => forbiddenKeys.has(key) || hasForbiddenKey(child));
}

function stripRecordMetadata(value) {
  if (!value || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(stripRecordMetadata);

  return Object.fromEntries(
    Object.entries(value)
      .filter(([key]) => !["id", "createdAt", "updatedAt"].includes(key))
      .map(([key, child]) => [key, stripRecordMetadata(child)]),
  );
}

function ensureUnique(items, keyFactory) {
  const seen = new Set();
  for (const item of items || []) {
    const key = keyFactory(item);
    if (seen.has(key)) return false;
    seen.add(key);
  }
  return true;
}

function validateImportPayload(data) {
  if (hasForbiddenKey(data)) {
    throw new AppError(422, "El archivo contiene campos no permitidos.", "INVALID_IMPORT");
  }

  const result = importSchema.safeParse(stripRecordMetadata(data));
  if (!result.success) {
    throw new AppError(422, "El archivo de importacion no tiene un formato valido.", "INVALID_IMPORT");
  }

  const payload = result.data;
  const skillsAreUnique = ensureUnique(payload.skills, (skill) => `${skill.name.toLowerCase()}:${skill.category}`);
  const projectsAreUnique = ensureUnique(payload.projects, (project) => project.slug);
  if (!skillsAreUnique || !projectsAreUnique) {
    throw new AppError(422, "El archivo contiene datos duplicados.", "INVALID_IMPORT");
  }

  return payload;
}

async function importProjects(tx, projects) {
  await tx.projectTechnology.deleteMany();
  await tx.project.deleteMany();

  for (const item of projects) {
    const { technologies, ...projectData } = item;
    const project = await tx.project.create({ data: projectData });

    for (const name of technologies) {
      const technology = await tx.technology.upsert({ where: { name }, update: {}, create: { name } });
      await tx.projectTechnology.create({
        data: { projectId: project.id, technologyId: technology.id },
      });
    }
  }
}

export async function publicPortfolio() {
  const [profile, skills, projects, workExperiences, education] = await Promise.all([
    prisma.profile.findUnique({ where: { id: 1 } }),
    prisma.skill.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] }),
    listProjects(),
    prisma.workExperience.findMany({ orderBy: { order: "asc" } }),
    prisma.education.findMany({ orderBy: { order: "asc" } }),
  ]);

  return { profile, skills, projects, workExperiences, education };
}

export const exportPortfolio = publicPortfolio;

export async function importPortfolio(data) {
  const payload = validateImportPayload(data);

  await prisma.$transaction(async (tx) => {
    if (payload.profile) {
      await tx.profile.upsert({
        where: { id: 1 },
        update: payload.profile,
        create: { id: 1, ...payload.profile },
      });
    }

    if (payload.skills) {
      await tx.skill.deleteMany();
      await tx.skill.createMany({ data: payload.skills });
    }

    if (payload.projects) {
      await importProjects(tx, payload.projects);
    }

    if (payload.workExperiences) {
      await tx.workExperience.deleteMany();
      await tx.workExperience.createMany({ data: payload.workExperiences });
    }

    if (payload.education) {
      await tx.education.deleteMany();
      await tx.education.createMany({ data: payload.education });
    }
  });

  return { message: "Datos importados correctamente." };
}
