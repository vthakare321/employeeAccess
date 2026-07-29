import { Navigate,  useNavigate, useParams } from "react-router-dom";

import { Button } from "@/shared/components/Button/Button";
import { ErrorMessage } from "@/shared/components/ErrorMessage/ErrorMessage";
import { Loader } from "@/shared/components/Loader/Loader";
import { Page } from "@/shared/components/page/Page";

import { useUser } from "../hooks/useUser";

import { ROUTES } from "@/routes/route.config";
import { parseUserId } from "@/shared/utils/parseUserId";

export const UserDetailPage = () => {
    const navigate = useNavigate();
  const { id } = useParams();

  const parsedUserId = parseUserId(id);


 const {
  data,
  isLoading,
  isError,
} = useUser(parsedUserId ?? 0);

if (parsedUserId === null) {
  return (
    <Navigate
      to={ROUTES.NOT_FOUND}
      replace
    />
  );
}

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return (
      <ErrorMessage message="Failed to load user." />
    );
  }

  return (
    <Page title="User Details">
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>First Name:</strong> {data.firstName}
          </div>

          <div>
            <strong>Last Name:</strong> {data.lastName}
          </div>

          <div>
            <strong>Age:</strong> {data.age}
          </div>

          <div>
            <strong>Email:</strong> {data.email}
          </div>

          <div>
            <strong>Phone:</strong> {data.phone}
          </div>

          <div>
            <strong>Department:</strong> {data.department}
          </div>

          <div>
            <strong>Role:</strong> {data.role}
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </div>
    </Page>
  );
};