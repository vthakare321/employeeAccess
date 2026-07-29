import type { Role } from "../types/role.types";

export interface LoginResponseDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}