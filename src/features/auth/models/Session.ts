import type { Permission } from "../types/permission.types";
import type { AuthUser } from "./AuthUser";

export interface Session {
  user: AuthUser | null;
  permissions: Permission[];
  isAuthenticated: boolean;
}