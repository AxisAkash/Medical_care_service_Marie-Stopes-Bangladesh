import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute() {
  const { user } = useAuth();
  const location = useLocation();
  const { module } = useParams();
  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  if (module && !location.pathname.endsWith("/no-access") && !user.allowedModules.includes(module) && user.role !== "system-admin") return <Navigate to={`/app/${module}/no-access`} replace />;
  return <Outlet />;
}
