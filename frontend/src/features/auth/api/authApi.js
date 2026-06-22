import { apiClient } from "../../../lib/http/apiClient";
export const authApi = {
  login: (credentials) => apiClient("/auth/login", { method: "POST", body: JSON.stringify(credentials) }),
  logout: () => apiClient("/auth/logout", { method: "POST" }),
  session: () => apiClient("/auth/session"),
};
