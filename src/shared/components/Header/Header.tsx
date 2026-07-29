import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/routes/route.config";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { Button } from "@/shared/components/Button/Button";

export const Header = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();

    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Employee Access Directory
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">
            {user?.firstName} {user?.lastName}
          </p>

          <p className="text-xs capitalize text-gray-500">
            {user?.role}
          </p>
        </div>

        <Button onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};