import { apiClient } from "../../../lib/http/apiClient";
export const contactApi = { create: (data) => apiClient("/contact-requests", { method: "POST", body: JSON.stringify(data) }) };
