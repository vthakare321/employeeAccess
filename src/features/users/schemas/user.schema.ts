import { z } from "zod";

import { ROLES } from "@/features/auth/types/role.types";

export const userSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters."),

  age: z
    .number()
    .min(18, "Age must be at least 18.")
    .max(100, "Age cannot be greater than 100."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits."),

  department: z
    .string()
    .trim()
    .min(2, "Department is required."),

  role: z.enum([
    ROLES.ADMINISTRATOR,
    ROLES.MANAGER,
    ROLES.VIEWER,
  ]),
});

export type UserFormValues = z.infer<typeof userSchema>;