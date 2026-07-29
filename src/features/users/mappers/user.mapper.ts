import type { Role } from "@/features/auth/types/role.types";

import type { UserDto } from "../dto/user.dto";
import type { User } from "../models/user.model";

export const mapUserDtoToUser = (
  dto: UserDto,
): User => ({
  id: dto.id,
  firstName: dto.firstName,
  lastName: dto.lastName,
  age: dto.age,
  email: dto.email,
  phone: dto.phone,
  department: dto.company.department,
  role: dto.role as Role,
});