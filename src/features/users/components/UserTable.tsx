import { useNavigate } from "react-router-dom";

// import { ROUTES } from "@/routes/route.config";
import { Table } from "@/shared/components/Table/Table";

import { getUserTableColumns } from "./userTable.columns";
import type { User } from "../models/user.model";

interface UserTableProps {
  users: User[];
}

export const UserTable = ({
  users,
}: UserTableProps) => {
  const navigate = useNavigate();

  const columns = getUserTableColumns(
    (id) => navigate(`/users/${id}`),
    (id) => navigate(`/users/${id}/edit`),
  );

  return (
    <Table
      columns={columns}
      data={users}
      rowKey="id"
    />
  );
};