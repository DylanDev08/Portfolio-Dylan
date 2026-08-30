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
      headline: "Programador Full Stack",
      bio: "Estudiante de Ingenieria en Sistemas Informaticos y programador Full Stack. Desarrollo portfolios, e-commerce, ERP, dashboards y automatizaciones con React, TypeScript, Node.js, Express.js, SQL, Supabase, Prisma, Docker, Git/GitHub, n8n, Excel y Google Sheets.",
      githubUrl: "https://github.com/DylanDev08",
      linkedinUrl: "https://www.linkedin.com/in/dylan-salcedo-26205a34a/",
      profileImage: "/profile-dylan-portfolio.svg",
    },
    create: {
      id: 1,
      firstName: "Dylan",
      lastName: "Salcedo",
      age: 18,
      headline: "Programador Full Stack",
      bio: "Estudiante de Ingenieria en Sistemas Informaticos y programador Full Stack. Desarrollo portfolios, e-commerce, ERP, dashboards y automatizaciones con React, TypeScript, Node.js, Express.js, SQL, Supabase, Prisma, Docker, Git/GitHub, n8n, Excel y Google Sheets.",
      location: "Rosario, Santa Fe, Argentina",
      email: "dylansalcedo333@gmail.com",
      phone: "+54 341 741 5857",
      whatsappUrl: "https://wa.me/543417415857",
      githubUrl: "https://github.com/DylanDev08",
      linkedinUrl: "https://www.linkedin.com/in/dylan-salcedo-26205a34a/",
      profileImage: "/profile-dylan-portfolio.svg",
    },
  });

  const skills = [
    ["React", "FRONTEND", 84, 1],
    ["TypeScript", "FRONTEND", 74, 2],
    ["JavaScript", "FRONTEND", 82, 3],
    ["CSS", "FRONTEND", 86, 4],
    ["Node.js", "BACKEND", 78, 5],
    ["Express.js", "BACKEND", 78, 6],
    ["SQL", "DATABASE", 76, 7],
    ["PostgreSQL", "DATABASE", 74, 8],
    ["Supabase", "DATABASE", 74, 9],
    ["Prisma", "DATABASE", 72, 10],
    ["Docker", "TOOLS", 68, 11],
    ["Git", "TOOLS", 84, 12],
    ["GitHub", "TOOLS", 84, 13],
    ["n8n", "TOOLS", 72, 14],
    ["Scripts", "TOOLS", 76, 15],
    ["Excel", "TOOLS", 82, 16],
    ["Google Sheets", "TOOLS", 82, 17],
    ["Dashboards", "TOOLS", 74, 18],
    ["Automatizacion de datos", "TOOLS", 76, 19],
    ["Trabajo en equipo", "SOFT_SKILL", 88, 20],
    ["Comunicacion", "SOFT_SKILL", 84, 21],
    ["Aprendizaje continuo", "SOFT_SKILL", 92, 22],
  ];

  for (const [name, category, level, order] of skills) {
    await prisma.skill.upsert({
      where: { name_category: { name, category } },
      update: { level, order },
      create: { name, category, level, order },
    });
  }

  await prisma.workExperience.deleteMany({});
  await prisma.workExperience.createMany({
    data: [
      {
        company: "Fortaleza Construcciones",
        role: "Desarrollador Web Full Stack y Soporte Administrativo",
        durationLabel: "8 meses",
        description:
          "Desarrollo de portfolio, e-commerce y ERP interno. Automatizacion de datos con scripts, n8n, APIs, Excel y Google Sheets. Creacion de dashboards, control de informacion, rate limiting, Supabase, Prisma, Docker, Git y GitHub.",
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
    ],
  });

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
      description: "E-commerce para materiales de Fortaleza Construcciones. Proyecto preparado para carga completa de productos, compra de dominio y deploy publico final.",
      coverImage: "/projects/materiales-fzac.svg",
      liveUrl: "#",
      githubUrl: "https://github.com/DylanDev08/Materiales-FZAC",
      featured: true,
      order: 3,
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "SQL", "Prisma"],
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
      description: "ERP en desarrollo para centralizar procesos, datos operativos, dashboards, automatizaciones y modulos administrativos. Acceso bloqueado hasta publicar una version estable.",
      coverImage: "/projects/prisma-erp.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      order: 6,
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
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
