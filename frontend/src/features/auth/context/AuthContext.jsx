import { createContext, useEffect, useMemo, useState } from "react";
import { authApi } from "../api/authApi";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApi.session().then(({ user }) => setUser(user)).catch(() => setUser(null)).finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => ({
    user, loading,
    async login(credentials) { const result = await authApi.login(credentials); setUser(result.user); return result.user; },
    async logout() { await authApi.logout(); setUser(null); },
  }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
