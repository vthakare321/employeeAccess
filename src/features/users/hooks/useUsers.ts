import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { userService } from "../services/user.service";
import { mapUserDtoToUser } from "../mappers/user.mapper";
import { getLocalUsers } from "../storage/localUserStorage";

export const useUsers = () => {
  return useQuery({
    queryKey: QUERY_KEYS.users.all,

    queryFn: async () => {
      const response = await userService.getUsers();

      const apiUsers = response.users.map(mapUserDtoToUser);

      const localUsers = getLocalUsers();

      return {
        ...response,
        users: [...localUsers, ...apiUsers],
      };
    },
  });
};