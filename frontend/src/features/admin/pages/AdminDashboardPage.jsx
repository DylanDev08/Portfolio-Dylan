import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPublicErrorMessage } from "../../../lib/errors/getPublicErrorMessage";
import { useAuth } from "../../auth/hooks/useAuth";
import { adminApi } from "../api/adminApi";
import { AuditManager } from "../components/AuditManager";
import { CvManager } from "../components/CvManager";
import { DataTransferManager } from "../components/DataTransferManager";
import { ProjectsManager } from "../components/ProjectsManager";
import { RequestsManager } from "../components/RequestsManager";
import { SkillsManager } from "../components/SkillsManager";

export function AdminDashboardPage() {
  const { logout } = useAuth();
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [requests, setRequests] = useState([]);
  const [visits, setVisits] = useState([]);
  const [logins, setLogins] = useState([]);
  const [message, setMessage] = useState("");

  async function load() {
    const [nextSkills, nextProjects, nextRequests, nextVisits, nextLogins] = await Promise.all([
      adminApi.getSkills(),
      adminApi.getProjects(),
      adminApi.getRequests(),
      adminApi.getVisits(),
      adminApi.getLogins(),
    ]);
    setSkills(nextSkills);
    setProjects(nextProjects);
    setRequests(nextRequests);
    setVisits(nextVisits);
    setLogins(nextLogins);
  }

  useEffect(() => {
    load().catch((error) => setMessage(getPublicErrorMessage(error)));
  }, []);

  async function action(callback) {
    setMessage("");
    try {
      await callback();
      await load();
      setMessage("Cambios guardados correctamente.");
    } catch (error) {
      setMessage(getPublicErrorMessage(error));
    }
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <Link to="/">Volver al portfolio</Link>
          <h1>Administracion</h1>
        </div>
        <button className="button button--secondary" onClick={logout}>
          Cerrar sesion
        </button>
      </header>
      {message && <p className="admin-message">{message}</p>}
      <div className="admin-grid">
        <SkillsManager
          skills={skills}
          onCreate={(data) => action(() => adminApi.createSkill(data))}
          onUpdate={(id, data) => action(() => adminApi.updateSkill(id, data))}
          onDelete={(id) => action(() => adminApi.deleteSkill(id))}
        />
        <CvManager onUpload={(data) => action(() => adminApi.uploadCv(data))} />
        <ProjectsManager
          projects={projects}
          onCreate={(data) => action(() => adminApi.createProject(data))}
          onUpdate={(id, data) => action(() => adminApi.updateProject(id, data))}
          onDelete={(id) => action(() => adminApi.deleteProject(id))}
        />
        <DataTransferManager onExport={adminApi.exportPortfolio} onImport={(data) => action(() => adminApi.importPortfolio(data))} />
        <RequestsManager requests={requests} onStatusChange={(id, status) => action(() => adminApi.updateRequestStatus(id, status))} />
        <AuditManager visits={visits} logins={logins} />
      </div>
    </main>
  );
}
