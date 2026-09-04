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

  const profileData = {
    firstName: "Dylan",
    lastName: "Salcedo",
    age: 18,
    headline: "Programador Full Stack",
    bio: "Estudiante de Ingeniería en Sistemas Informáticos y programador Full Stack orientado a soluciones digitales para negocios. Creo portfolios, e-commerce, ERP, dashboards, automatizaciones, documentación técnica y chatbots comerciales para ordenar procesos, reducir tareas manuales y mejorar la forma en que clientes y equipos gestionan la información.",
    location: "Rosario, Santa Fe, Argentina",
    email: "dylansalcedo333@gmail.com",
    phone: "+54 341 741 5857",
    whatsappUrl: "https://wa.me/543417415857",
    githubUrl: "https://github.com/DylanDev08",
    linkedinUrl: "https://www.linkedin.com/in/dylan-salcedo-26205a34a/",
    profileImage: "/profile-dylan-portfolio.svg",
  };

  await prisma.profile.upsert({
    where: { id: 1 },
    update: profileData,
    create: { id: 1, ...profileData },
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
    ["Automatización de datos", "TOOLS", 76, 19],
    ["Trabajo en equipo", "SOFT_SKILL", 88, 20],
    ["Comunicación", "SOFT_SKILL", 84, 21],
    ["Aprendizaje continuo", "SOFT_SKILL", 92, 22],
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
      role: "Soluciones digitales y soporte administrativo",
      durationLabel: "7 meses",
      description:
        "Creación de soluciones para ordenar procesos internos y comerciales: portfolio, e-commerce, ERP, automatización de datos con scripts y n8n, control de información con Excel y Google Sheets, dashboards, rate limiting, Supabase, Prisma, Docker, Git y GitHub.",
      order: 1,
    },
    {
      company: "Proyectos independientes",
      role: "Desarrollador Web Freelancer",
      durationLabel: "1 año y medio aproximadamente",
      description:
        "Soluciones responsivas para portfolios, sistemas, automatizaciones, chatbots y e-commerce adaptadas a las necesidades de cada proyecto.",
      order: 2,
    },
  ];

  for (const item of experiences) {
    const existing = await prisma.workExperience.findFirst({ where: { company: item.company } });
    if (existing) {
      await prisma.workExperience.update({ where: { id: existing.id }, data: item });
    } else {
      await prisma.workExperience.create({ data: item });
    }
  }

  const education = [
    { period: "2026 - Actualidad", title: "Ingeniería en Sistemas Informáticos", institution: "Universidad Abierta Interamericana - Sede Rosario", order: 1 },
    { period: "Finalizado en 2025", title: "Bachiller en Informática y Robótica", institution: "Colegio Secundario Tesla", order: 2 },
    { period: "Abril de 2025 - Diciembre de 2025", title: "Formación Frontend y Backend", institution: "Cuatro Vientos", order: 3 },
    { period: "Marzo de 2024 - Diciembre de 2024", title: "Diseño y desarrollo de páginas web", institution: "Digital House", order: 4 },
  ];

  if ((await prisma.education.count()) === 0) await prisma.education.createMany({ data: education });

  const projects = [
    {
      title: "Innova Click",
      slug: "innova-click",
      description: "Sitio profesional para agencia de marketing digital, orientado a presencia online, servicios, SEO, conversión y contacto comercial. Tipo: WordPress.",
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
      description: "Tienda online de indumentaria personalizada sobre TiendaNube, con identidad visual, catálogo y experiencia de compra.",
      coverImage: "/projects/fuckthesys.svg",
      liveUrl: "https://fuckthesys2.mitiendanube.com",
      githubUrl: "#",
      featured: true,
      order: 2,
      technologies: ["TiendaNube", "E-commerce", "CSS", "Branding"],
    },
    {
      title: "Materiales FZAC",
      slug: "materiales-fzac",
      description: "Solución e-commerce para materiales de Fortaleza Construcciones. Preparada para carga completa de productos, compra de dominio y deploy público final. Tipo: código propio.",
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
      description: "Plataforma full stack de mangas y cómics con catálogo, ranking, lector, usuarios, comentarios y panel administrativo. Tipo: código propio y código base full stack.",
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
      description: "Solución institucional para Fortaleza Construcciones con obras, servicios, galerías, panel privado y administración de contenido. Tipo: código propio.",
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
      description: "ERP en desarrollo para centralizar procesos, datos operativos, dashboards, automatizaciones y módulos administrativos. Acceso bloqueado hasta publicar una versión estable.",
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
