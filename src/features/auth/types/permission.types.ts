export const PERMISSIONS = {
  USERS_VIEW: "users:view",
  USERS_CREATE: "users:create",
  USERS_EDIT: "users:edit",
  USERS_EDIT_ROLE: "users:edit-role",
  USERS_DELETE: "users:delete",

  SETTINGS_VIEW: "settings:view",
} as const;

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];