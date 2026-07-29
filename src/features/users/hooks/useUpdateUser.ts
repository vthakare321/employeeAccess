import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { userService } from "../services/user.service";
import type { UserFormValues } from "../schemas/user.schema";
import {
  getLocalUserById,
  isLocalUser,
  updateLocalUser,
} from "../storage/localUserStorage";

interface UpdateUserPayload {
  id: number;
  data: UserFormValues;
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: UpdateUserPayload) => {
      if (isLocalUser(id)) {
        const existingUser = getLocalUserById(id);

        if (!existingUser) {
          throw new Error("User not found");
        }

        const updatedUser = {
          ...existingUser,
          ...data,
        };

        updateLocalUser(updatedUser);

        return updatedUser;
      }

      const response = await userService.updateUser(
        id,
        data,
      );

      return response;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.users.all,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.users.detail(
          variables.id,
        ),
      });
    },
  });
};