import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { DocsPage } from "../pages/DocsPage";
import { EducationPage } from "../pages/EducationPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { LegalPage } from "../pages/LegalPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectsIntroPage } from "../pages/ProjectsIntroPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ServicesPage } from "../pages/ServicesPage";
import { SkillsPage } from "../pages/SkillsPage";
import { WorkflowsPage } from "../pages/WorkflowsPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/proyectos" element={<ProjectsIntroPage />} />
      <Route path="/proyectos/listado" element={<ProjectsPage />} />
      <Route path="/automatizaciones" element={<WorkflowsPage />} />
      <Route path="/documentacion" element={<DocsPage />} />
      <Route path="/experiencia" element={<ExperiencePage />} />
      <Route path="/formacion" element={<EducationPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
