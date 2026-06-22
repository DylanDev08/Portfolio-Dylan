import { apiClient } from "../../../lib/http/apiClient";

export const adminApi = {
  getSkills: () => apiClient("/skills"),
  createSkill: (data) => apiClient("/skills", { method: "POST", body: JSON.stringify(data) }),
  updateSkill: (id, data) => apiClient(`/skills/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteSkill: (id) => apiClient(`/skills/${id}`, { method: "DELETE" }),

  getProjects: () => apiClient("/projects"),
  createProject: (data) => apiClient("/projects", { method: "POST", body: JSON.stringify(data) }),
  updateProject: (id, data) => apiClient(`/projects/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteProject: (id) => apiClient(`/projects/${id}`, { method: "DELETE" }),

  getRequests: () => apiClient("/contact-requests"),
  updateRequestStatus: (id, status) =>
    apiClient(`/contact-requests/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }),

  getVisits: () => apiClient("/audit/visits"),
  getLogins: () => apiClient("/audit/logins"),

  uploadCv: (formData) => apiClient("/cv/upload", { method: "POST", body: formData }),
  exportPortfolio: () => apiClient("/portfolio/export"),
  importPortfolio: (data) => apiClient("/portfolio/import", { method: "POST", body: JSON.stringify(data) }),
};
