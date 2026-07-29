import { useNavigate, useParams , Navigate} from "react-router-dom";

import { ErrorMessage } from "@/shared/components/ErrorMessage/ErrorMessage";
import { Loader } from "@/shared/components/Loader/Loader";
import { Page } from "@/shared/components/page/Page";

import { UserForm } from "../components/UserForm/UserForm";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useUser } from "../hooks/useUser";
import type { UserFormValues } from "../schemas/user.schema";

import { usePermission } from "@/features/auth/hooks/usePermission";
import { PERMISSIONS } from "@/features/auth/types/permission.types";
import { ROUTES } from "@/routes/route.config";
import { parseUserId } from "@/shared/utils/parseUserId";

export const UserEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const canEditUser = usePermission(
  PERMISSIONS.USERS_EDIT,
);



const parsedUserId = parseUserId(id);

const {
  data,
  isLoading,
  isError,
} = useUser(parsedUserId ?? 0);

 const {
    mutateAsync,
    isPending,
  } = useUpdateUser();

if (parsedUserId === null) {
  return (
    <Navigate
      to={ROUTES.NOT_FOUND}
      replace
    />
  );
}

if (!canEditUser) {
    return (
      <Navigate
        to={ROUTES.FORBIDDEN}
        replace
      />
    );
  }
 

  const handleSubmit = async (
    values: UserFormValues,
  ) => {
    await mutateAsync({
      id: parsedUserId,
      data: values,
    });

    navigate("/users");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return (
      <ErrorMessage message="Failed to load user." />
    );
  }

//   if (!canEditUser) {
//   return (
//     <Navigate
//       to={ROUTES.FORBIDDEN}
//       replace
//     />
//   );
// }

  return (
    <Page title="Edit User">
      <UserForm
        defaultValues={data}
        onSubmit={handleSubmit}
        submitLabel="Update User"
        isSubmitting={isPending}
      />
    </Page>
  );
};