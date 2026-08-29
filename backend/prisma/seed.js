import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password || password.length < 12) {
    throw new Error("Configuracion administrativa incompleta.");
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.upsert({
    where: { email },
    update: { passwordHash },
    create: { email, passwordHash },
  });

  await prisma.profile.upsert({
    where: { id: 1 },
    update: {
      githubUrl: "https://github.com/DylanDev08",
      linkedinUrl: "https://www.linkedin.com/in/dylan-salcedo-26205a34a/",
    },
    create: {
      id: 1,
      firstName: "Dylan",
      lastName: "Salcedo",
      age: 18,
      headline: "Programador Full Stack",
      bio: "Estudiante de Ingenieria en Sistemas Informaticos y desarrollador web enfocado en crear soluciones claras, funcionales y sostenibles.",
      location: "Rosario, Santa Fe, Argentina",
      email: "dylansalcedo333@gmail.com",
      phone: "+54 341 741 5857",
      whatsappUrl: "https://wa.me/543417415857",
      githubUrl: "https://github.com/DylanDev08",
      linkedinUrl: "https://www.linkedin.com/in/dylan-salcedo-26205a34a/",
      profileImage: "/profile-dylan.jpeg",
    },
  });

  const skills = [
    ["React", "FRONTEND", 82, 1],
    ["CSS", "FRONTEND", 86, 2],
    ["JavaScript", "FRONTEND", 80, 3],
    ["Node.js", "BACKEND", 76, 4],
    ["Express.js", "BACKEND", 76, 5],
    ["SQL", "DATABASE", 74, 6],
    ["PostgreSQL", "DATABASE", 72, 7],
    ["Prisma", "DATABASE", 68, 8],
    ["Git", "TOOLS", 82, 9],
    ["GitHub", "TOOLS", 82, 10],
    ["Trabajo en equipo", "SOFT_SKILL", 86, 11],
    ["Comunicacion", "SOFT_SKILL", 84, 12],
    ["Aprendizaje continuo", "SOFT_SKILL", 90, 13],
  ];

  for (const [name, category, level, order] of skills) {
    await prisma.skill.upsert({
      where: { name_category: { name, category } },
      update: { level, order },
      create: { name, category, level, order },
    });
  }

  const experiences = [
    {
      company: "Fortaleza Construcciones",
      role: "Desarrollador web y soporte administrativo / Data Entry",
      durationLabel: "3 meses",
      description:
        "Desarrollo de portfolio corporativo y e-commerce, organizacion de informacion, manejo de Excel, validaciones, control de solicitudes, rate limiting, Git y GitHub.",
      order: 1,
    },
    {
      company: "Proyectos independientes",
      role: "Desarrollador Web Freelancer",
      durationLabel: "1 ano y medio aproximadamente",
      description:
        "Desarrollo de interfaces responsivas, portfolios, landing pages, e-commerce y sistemas web con React, Node.js, Express.js y SQL.",
      order: 2,
    },
  ];

  if ((await prisma.workExperience.count()) === 0) await prisma.workExperience.createMany({ data: experiences });

  const education = [
    { period: "2026 - Actualidad", title: "Ingenieria en Sistemas Informaticos", institution: "Universidad Abierta Interamericana - Sede Rosario", order: 1 },
    { period: "Finalizado en 2025", title: "Bachiller en Informatica y Robotica", institution: "Colegio Secundario Tesla", order: 2 },
    { period: "Abril de 2025 - Diciembre de 2025", title: "Formacion Frontend y Backend", institution: "Cuatro Vientos", order: 3 },
    { period: "Marzo de 2024 - Diciembre de 2024", title: "Diseno y desarrollo de paginas web", institution: "Digital House", order: 4 },
  ];

  if ((await prisma.education.count()) === 0) await prisma.education.createMany({ data: education });

  const projects = [
    {
      title: "Innova Click",
      slug: "innova-click",
      description: "Sitio profesional para una agencia de marketing digital, orientado a presencia online, servicios, conversion y comunicacion comercial.",
      coverImage: "/projects/innova-click.svg",
      liveUrl: "https://innovaclick.com.ar",
      githubUrl: "#",
      featured: true,
      order: 1,
      technologies: ["WordPress", "SEO", "CSS", "Marketing digital"],
    },
    {
      title: "FuckTheSys",
      slug: "fuckthesys",
      description: "E-commerce de indumentaria personalizada desarrollado sobre Tienda Nube, con identidad visual, catalogo y experiencia de compra online.",
      coverImage: "/projects/fuckthesys.svg",
      liveUrl: "https://fuckthesys2.mitiendanube.com",
      githubUrl: "#",
      featured: true,
      order: 2,
      technologies: ["Tienda Nube", "E-commerce", "CSS", "Branding"],
    },
    {
      title: "Materiales FZAC",
      slug: "materiales-fzac",
      description: "E-commerce para materiales de Fortaleza Construcciones. Proyecto preparado para carga completa de productos, dominio y deploy publico final.",
      coverImage: "/projects/materiales-fzac.svg",
      liveUrl: "#",
      githubUrl: "https://github.com/DylanDev08/Materiales-FZAC",
      featured: true,
      order: 3,
      technologies: ["React", "Node.js", "Express.js", "SQL", "Prisma"],
    },
    {
      title: "Mangas MaxDy",
      slug: "mangas-maxdy",
      description: "Plataforma full stack de mangas y comics con catalogo, ranking, lector, usuarios, comentarios y panel administrativo.",
      coverImage: "/projects/mangas-maxdy.svg",
      liveUrl: "#",
      githubUrl: "https://github.com/DylanDev08/Comics-Manga-MaxDy",
      featured: false,
      order: 4,
      technologies: ["React", "Node.js", "Express.js", "Prisma", "Supabase"],
    },
    {
      title: "Portfolio FZAC",
      slug: "portfolio-fzac",
      description: "Portfolio institucional de Fortaleza Construcciones con obras, servicios, trabajos, galerias, panel privado y administracion de contenido.",
      coverImage: "/projects/portfolio-fzac.svg",
      liveUrl: "https://fortalezaconstrucciones-port.vercel.app",
      githubUrl: "https://github.com/DylanDev08/FZAC-Portfolio",
      featured: true,
      order: 5,
      technologies: ["React", "Supabase", "Prisma", "Express.js", "Render"],
    },
    {
      title: "PrismaERP",
      slug: "prisma-erp",
      description: "ERP en desarrollo para centralizar procesos, datos operativos, gestion interna y modulos administrativos. Acceso bloqueado hasta publicar una version estable.",
      coverImage: "/projects/prisma-erp.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      order: 6,
      technologies: ["React", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    },
  ];

  for (const item of projects) {
    const { technologies, ...data } = item;
    const project = await prisma.project.upsert({ where: { slug: data.slug }, update: data, create: data });

    for (const name of technologies) {
      const technology = await prisma.technology.upsert({ where: { name }, update: {}, create: { name } });
      await prisma.projectTechnology.upsert({
        where: { projectId_technologyId: { projectId: project.id, technologyId: technology.id } },
        update: {},
        create: { projectId: project.id, technologyId: technology.id },
      });
    }
  }

  console.log("Datos iniciales creados.");
}

main().finally(() => prisma.$disconnect());
