import type { Role } from "../types/role.types";

export interface AuthUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}