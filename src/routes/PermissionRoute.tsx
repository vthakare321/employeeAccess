import { Navigate, Outlet } from "react-router-dom";

import { usePermission } from "@/features/auth/hooks/usePermission";
import type { Permission } from "@/features/auth/types/permission.types";

import { ROUTES } from "./route.config";

interface PermissionRouteProps {
  permission: Permission;
}

export const PermissionRoute = ({
  permission,
}: PermissionRouteProps) => {
  const hasPermission = usePermission(permission);

  if (!hasPermission) {
    return <Navigate to={ROUTES.FORBIDDEN} replace />;
  }

  return <Outlet />;
};