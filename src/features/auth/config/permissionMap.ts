import type { Permission } from "../types/permission.types";
import { PERMISSIONS } from "../types/permission.types";
import type { Role } from "../types/role.types";
import { ROLES } from "../types/role.types";

export const permissionMap: Record<Role, Permission[]> = {
  [ROLES.ADMINISTRATOR]: [
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_CREATE,
    PERMISSIONS.USERS_EDIT,
    PERMISSIONS.USERS_EDIT_ROLE,
    PERMISSIONS.USERS_DELETE,
    PERMISSIONS.SETTINGS_VIEW,
  ],

  [ROLES.MANAGER]: [
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_EDIT,
  ],

  [ROLES.VIEWER]: [
    PERMISSIONS.USERS_VIEW,
  ],
};