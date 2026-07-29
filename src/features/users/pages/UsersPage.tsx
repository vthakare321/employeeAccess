import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/routes/route.config";

import { Button } from "@/shared/components/Button/Button";
import { ErrorMessage } from "@/shared/components/ErrorMessage/ErrorMessage";
import { Loader } from "@/shared/components/Loader/Loader";
import { Page } from "@/shared/components/page/Page";

import { UserTable } from "../components/UserTable";
import { useUsers } from "../hooks/useUsers";
import { EmptyState } from "@/shared/components/EmptyState/EmptyState";
export const UsersPage = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useUsers();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorMessage message="Failed to load users." />
    );
  }

  if (!data || data.users.length === 0) {
  return (
    <Page title="Users">
      <EmptyState
        title="No users found"
        description="There are no users available."
      />
    </Page>
  );
}

  return (
    <Page title="Users">
      <div className="mb-6 flex justify-end">
        <Button
          onClick={() => navigate(ROUTES.USER_CREATE)}
        >
          Create User
        </Button>
      </div>

      <UserTable users={data.users} />
    </Page>
  );
};