import { Select } from "@/shared/components/Select/Select";

interface UserSortProps {
  sortBy: "firstName" | "age" | "email";
  order: "asc" | "desc";
  onChange: (
    sortBy: "firstName" | "age" | "email",
    order: "asc" | "desc",
  ) => void;
}

const sortOptions = [
  {
    label: "First Name",
    value: "firstName",
  },
  {
    label: "Age",
    value: "age",
  },
  {
    label: "Email",
    value: "email",
  },
];

const orderOptions = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];

export const UserSort = ({
  sortBy,
  order,
  onChange,
}: UserSortProps) => {
  return (
    <div className="mb-4 flex gap-4">
      <Select
        label="Sort By"
        value={sortBy}
        options={sortOptions}
        onChange={(event) =>
          onChange(
            event.target.value as
              | "firstName"
              | "age"
              | "email",
            order,
          )
        }
      />

      <Select
        label="Order"
        value={order}
        options={orderOptions}
        onChange={(event) =>
          onChange(
            sortBy,
            event.target.value as
              | "asc"
              | "desc",
          )
        }
      />
    </div>
  );
};