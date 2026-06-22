import { apiClient } from "../../../lib/http/apiClient";
export const portfolioApi = { getPublic: () => apiClient("/portfolio/public") };
