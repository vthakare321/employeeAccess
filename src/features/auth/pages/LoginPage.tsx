import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "@/routes/route.config";
import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";

import { authService } from "../services/auth.service";
import { loginSchema } from "../schemas/login.schema";
import type { LoginFormValues } from "../schemas/login.schema";
import { permissionMap } from "../utils/permissionMap";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const user = await authService.login(data);

      login(user, permissionMap[user.role]);

      navigate(ROUTES.USERS, {
  replace: true,
});
    } catch (error) {
      setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Login failed.",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Sign In
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Input
            label="Username"
            {...register("username")}
            error={errors.username?.message}
          />

          <Input
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          {errors.root && (
            <p className="text-sm text-red-600">
              {errors.root.message}
            </p>
          )}

          <Button
            type="submit"
            fullWidth
            loading={isSubmitting}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};