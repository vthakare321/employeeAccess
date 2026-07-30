import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/routes/route.config";
import { useEffect } from "react";

import { Button } from "@/shared/components/Button/Button";
import { EmptyState } from "@/shared/components/EmptyState/EmptyState";
import { ErrorMessage } from "@/shared/components/ErrorMessage/ErrorMessage";
import { Loader } from "@/shared/components/Loader/Loader";
import { Page } from "@/shared/components/page/Page";
import { Pagination } from "@/shared/components/Pagination/Pagination";

import { UserTable } from "../components/UserTable";
import { useUserFilters } from "../hooks/useUserFilters";
import { useUsers } from "../hooks/useUsers";
import { UserSort } from "../components/UserSort";


export const UsersPage = () => {
  useEffect(() => {
    console.log("UsersPage Mounted");

    return () => {
      console.log("UsersPage Unmounted");
    };
  }, []);

  console.log("UsersPage Render");

  const navigate = useNavigate();

  const { filters, setPage, setSorting,} =
    useUserFilters();

 

const { data, isLoading, isError } =
  useUsers(filters);

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



const totalPages = Math.ceil(
  data.total / filters.limit,
);

  return (
    <Page title="Users">

     

     
      <UserSort
  sortBy={filters.sortBy ?? "firstName"}
  order={filters.order ?? "asc"}
  onChange={setSorting}
/>
      <div className="mb-6 flex justify-end">
        <Button
          onClick={() =>
            navigate(ROUTES.USER_CREATE)
          }
        >
          Create User
        </Button>
      </div>




      <UserTable users={data.users} />

      <Pagination
  currentPage={filters.page}
  totalPages={totalPages}
  onPageChange={setPage}
/>;
    </Page>
  );
};