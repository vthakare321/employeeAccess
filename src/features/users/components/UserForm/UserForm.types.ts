import type { UserFormValues } from "../../schemas/user.schema";

export interface UserFormProps {
  defaultValues?: Partial<UserFormValues>;
  isSubmitting?: boolean;
  submitLabel?: string;
  onSubmit: (values: UserFormValues) => void;
}