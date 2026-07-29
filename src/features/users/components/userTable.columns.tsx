import { Button } from "@/shared/components/Button/Button";

import type { TableColumn } from "@/shared/components/Table/Table.types";
import type { User } from "../models/user.model";

export const getUserTableColumns = (
  onView: (id: number) => void,
  onEdit: (id: number) => void,
): TableColumn<User>[] => [
  {
    key: "firstName",
    header: "First Name",
  },
  {
    key: "lastName",
    header: "Last Name",
  },
  {
    key: "email",
    header: "Email",
  },
  {
    key: "department",
    header: "Department",
  },

  {
  key: "age",
  header: "Age",
},
  {
    key: "role",
    header: "Role",
  },
  {
    key: "actions",
    header: "Actions",
    render: (user) => (
      <div className="flex gap-2">
        <Button onClick={() => onView(user.id)}>
          View
        </Button>

        <Button onClick={() => onEdit(user.id)}>
          Edit
        </Button>
      </div>
    ),
  },
];