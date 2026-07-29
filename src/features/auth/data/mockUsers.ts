import type { Role } from "../types/role.types";

export interface MockUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}

export const mockUsers: MockUser[] = [
  {
    id: 1,
    username: "admin",
    password: "Admin@123",
    firstName: "System",
    lastName: "Administrator",
    email: "admin@example.com",
    role: "administrator",
  },
  {
    id: 2,
    username: "manager",
    password: "Manager@123",
    firstName: "Project",
    lastName: "Manager",
    email: "manager@example.com",
    role: "manager",
  },
  {
    id: 3,
    username: "contributor",
    password: "Contributor@123",
    firstName: "Content",
    lastName: "Contributor",
    email: "contributor@example.com",
    role: "viewer"
  },
];