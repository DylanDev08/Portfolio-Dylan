import { apiClient } from "../../../lib/http/apiClient";

export const auditApi = {
  recordVisit: (data) => apiClient("/audit/visit", { method: "POST", body: JSON.stringify(data) }),
};
