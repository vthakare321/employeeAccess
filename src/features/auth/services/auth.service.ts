import type { LoginRequestDto } from "../dto/LoginRequestDto";
import type { LoginResponseDto } from "../dto/LoginResponseDto";
import { mapLoginResponseToAuthUser } from "../mappers/auth.mapper";
import type { AuthUser } from "../models/AuthUser";
import { mockUsers } from "../data/mockUsers";

class AuthService {
  async login(request: LoginRequestDto): Promise<AuthUser> {
    const user = mockUsers.find(
      (user) =>
        user.username === request.username &&
        user.password === request.password,
    );

    if (!user) {
      throw new Error("Invalid username or password.");
    }

    const response: LoginResponseDto = {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    return mapLoginResponseToAuthUser(response);
  }

  logout(): void {
    
  }
}

export const authService = new AuthService();