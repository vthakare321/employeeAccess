import { permissionMap } from "../config/permissionMap";
import { useAuthStore } from "../store/auth.store";
import type { Permission } from "../types/permission.types";

export const usePermission = (
  permission: Permission,
): boolean => {
  const role = useAuthStore((state) => state.user?.role);

  if (!role) {
    return false;
  }

  return permissionMap[role].includes(permission);
};