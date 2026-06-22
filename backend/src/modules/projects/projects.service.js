import { prisma } from "../../database/prisma.js";

const include = { technologies: { include: { technology: true } } };
const projectFields = ["title", "slug", "description", "coverImage", "liveUrl", "githubUrl", "featured", "order"];

function serialize(project) {
  return { ...project, technologies: project.technologies.map((item) => item.technology.name) };
}

function normalizeTechnologies(names = []) {
  return [...new Set(names.map((name) => name.trim()).filter(Boolean))];
}

function pickProjectFields(data) {
  return Object.fromEntries(Object.entries(data).filter(([key]) => projectFields.includes(key)));
}

async function technologyLinks(tx, names) {
  return Promise.all(
    normalizeTechnologies(names).map(async (name) => {
      const technology = await tx.technology.upsert({ where: { name }, update: {}, create: { name } });
      return { technologyId: technology.id };
    }),
  );
}

export async function listProjects() {
  return (await prisma.project.findMany({ include, orderBy: [{ featured: "desc" }, { order: "asc" }] })).map(serialize);
}

export async function createProject(data) {
  return prisma.$transaction(async (tx) => {
    const { technologies = [] } = data;
    const project = pickProjectFields(data);
    const created = await tx.project.create({
      data: { ...project, technologies: { create: await technologyLinks(tx, technologies) } },
      include,
    });
    return serialize(created);
  });
}

export async function updateProject(id, data) {
  return prisma.$transaction(async (tx) => {
    const { technologies = [] } = data;
    const project = pickProjectFields(data);
    await tx.projectTechnology.deleteMany({ where: { projectId: id } });
    const updated = await tx.project.update({
      where: { id },
      data: { ...project, technologies: { create: await technologyLinks(tx, technologies) } },
      include,
    });
    return serialize(updated);
  });
}

export const deleteProject = (id) => prisma.project.delete({ where: { id } });
