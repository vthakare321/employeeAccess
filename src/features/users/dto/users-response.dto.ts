import type { UserDto } from "./user.dto";

export interface UsersResponseDto {
  users: UserDto[];
  total: number;
  skip: number;
  limit: number;
}