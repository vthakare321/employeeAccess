import {
  Navigate,
  useNavigate,
} from "react-router-dom";

import { Page } from "@/shared/components/page/Page";

import { UserForm } from "../components/UserForm/UserForm";
import { useCreateUser } from "../hooks/useCreateUser";
import type { UserFormValues } from "../schemas/user.schema";
import { usePermission } from "@/features/auth/hooks/usePermission";
import { PERMISSIONS } from "@/features/auth/types/permission.types";
import { ROUTES } from "@/routes/route.config";
export const CreateUserPage = () => {
  const navigate = useNavigate();
  const canCreateUser = usePermission(
  PERMISSIONS.USERS_CREATE,
);

  const { mutateAsync, isPending } = useCreateUser();

  const handleSubmit = async (
    values: UserFormValues,
  ) => {
    await mutateAsync(values);

    navigate("/users");
  };

  if (!canCreateUser) {
  return (
    <Navigate
      to={ROUTES.FORBIDDEN}
      replace
    />
  );
}

  return (
    <Page title="Create User">
      <UserForm
        onSubmit={handleSubmit}
        submitLabel="Create User"
        isSubmitting={isPending}
      />
    </Page>
  );
};