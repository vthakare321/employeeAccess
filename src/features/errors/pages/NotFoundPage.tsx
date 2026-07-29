import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/components/Button/Button";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <div>
        <h1 className="text-6xl font-bold text-blue-600">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist.
        </p>
      </div>

      <Button
        onClick={() => navigate("/users")}
      >
        Go to Users
      </Button>
    </div>
  );
};