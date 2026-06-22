import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { EducationPage } from "../pages/EducationPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { LegalPage } from "../pages/LegalPage";
import { ProjectsIntroPage } from "../pages/ProjectsIntroPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { SkillsPage } from "../pages/SkillsPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/proyectos" element={<ProjectsIntroPage />} />
      <Route path="/proyectos/listado" element={<ProjectsPage />} />
      <Route path="/experiencia" element={<ExperiencePage />} />
      <Route path="/formacion" element={<EducationPage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
