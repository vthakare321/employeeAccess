import { authService } from "../services/auth.service";
import { permissionMap } from "../utils/permissionMap";
import { useAuthStore } from "../store/auth.store";
import type { LoginRequestDto } from "../dto/LoginRequestDto";

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);

  const signIn = async (request: LoginRequestDto) => {
    const user = await authService.login(request);

    login(user, permissionMap[user.role]);

    return user;
  };

  return {
    signIn,
  };
};