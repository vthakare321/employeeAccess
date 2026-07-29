import type { Role } from "@/features/auth/types/role.types";

export interface UserFormValues {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  department: string;
  role: Role;
}