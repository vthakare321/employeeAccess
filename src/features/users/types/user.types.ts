import type { Role } from "@/features/auth/types/role.types";

export interface UserFilters {
  search: string;
  role?: Role;
  page: number;
  limit: number;
  sortBy?: string;
  order?: "asc" | "desc";
}