import type { LoginResponseDto } from "../dto/LoginResponseDto";
import type { AuthUser } from "../models/AuthUser";

export const mapLoginResponseToAuthUser = (
  dto: LoginResponseDto,
): AuthUser => ({
  id: dto.id,
  username: dto.username,
  firstName: dto.firstName,
  lastName: dto.lastName,
  email: dto.email,
  role: dto.role,
});