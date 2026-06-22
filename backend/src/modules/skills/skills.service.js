import { prisma } from "../../database/prisma.js";

const allowedFields = ["name", "category", "level", "order"];

function pickSkillFields(data) {
  return Object.fromEntries(Object.entries(data).filter(([key]) => allowedFields.includes(key)));
}

export const listSkills = () => prisma.skill.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] });
export const createSkill = (data) => prisma.skill.create({ data: pickSkillFields(data) });
export const updateSkill = (id, data) => prisma.skill.update({ where: { id }, data: pickSkillFields(data) });
export const deleteSkill = (id) => prisma.skill.delete({ where: { id } });
