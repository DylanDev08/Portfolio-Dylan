const apiUrl = import.meta.env.VITE_API_URL;

export const env = Object.freeze({
  apiUrl: apiUrl || "http://localhost:4000/api",
});
