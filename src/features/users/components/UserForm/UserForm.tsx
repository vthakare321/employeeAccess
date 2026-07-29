import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Select } from "@/shared/components/Select/Select";

import {
  userSchema,
  type UserFormValues,
} from "../../schemas/user.schema";

import { ROLES } from "@/features/auth/types/role.types";

import type { UserFormProps } from "./UserForm.types";

import { usePermission } from "@/features/auth/hooks/usePermission";
import { PERMISSIONS } from "@/features/auth/types/permission.types";

const roleOptions = [
  {
    label: "Administrator",
    value: ROLES.ADMINISTRATOR,
  },
  {
    label: "Manager",
    value: ROLES.MANAGER,
  },
  {
    label: "Viewer",
    value: ROLES.VIEWER,
  },
];

export const UserForm = ({
  defaultValues,
  onSubmit,
  submitLabel = "Save",
  isSubmitting = false,
}: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  const canEditRole = usePermission(
  PERMISSIONS.USERS_EDIT_ROLE,
);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        label="First Name"
        required
        {...register("firstName")}
        error={errors.firstName?.message}
      />

      <Input
        label="Last Name"
        required
        {...register("lastName")}
        error={errors.lastName?.message}
      />

      <Input
        label="Age"
        type="number"
        required
        {...register("age", {
          valueAsNumber: true,
        })}
        error={errors.age?.message}
      />

      <Input
        label="Email"
        type="email"
        required
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Phone"
        required
        {...register("phone")}
        error={errors.phone?.message}
      />

      <Input
        label="Department"
        required
        {...register("department")}
        error={errors.department?.message}
      />

      <Select
        disabled={!canEditRole}
        label="Role"
        required
        options={roleOptions}
        {...register("role")}
        error={errors.role?.message}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
      >
        {submitLabel}
      </Button>
    </form>
  );
};