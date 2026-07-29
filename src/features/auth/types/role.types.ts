export const ROLES = {
  ADMINISTRATOR: "administrator",
  MANAGER: "manager",
  VIEWER: "viewer",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];