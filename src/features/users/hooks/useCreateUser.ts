import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

// import { mapUserDtoToUser } from "../mappers/user.mapper";
import type { UserFormValues } from "../schemas/user.schema";
import { userService } from "../services/user.service";
import {
  addLocalUser,
  generateLocalUserId,
} from "../storage/localUserStorage";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UserFormValues) => {
  // Call DummyJSON API
  await userService.createUser(data);

  // Create the local user from the form values
  const localUser = {
    id: generateLocalUserId(),
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    email: data.email,
    phone: data.phone,
    department: data.department,
    role: data.role,
  };

  addLocalUser(localUser);

  return localUser;
},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.users.all,
      });
    },
  });
};