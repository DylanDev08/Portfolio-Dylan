import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoadingScreen } from "../../../components/common/LoadingScreen";
import { useAuth } from "../hooks/useAuth";
export function ProtectedRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/dylan-panel/login" state={{ from: location }} replace />;
  return <Outlet />;
}
