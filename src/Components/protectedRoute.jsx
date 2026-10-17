import { Navigate, Outlet } from "react-router";
import { useRequisicoes } from "./context/hooks/useRequisicoes";

export function ProtectedRoute() {
  const { token } = useRequisicoes({});
  
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
