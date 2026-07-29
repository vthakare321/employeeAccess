import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { mapUserDtoToUser } from "../mappers/user.mapper";
import { userService } from "../services/user.service";
import { getLocalUsers } from "../storage/localUserStorage";
import type { UserQueryParams } from "../types/userQueryParams";

export const useUsers = (
  params: UserQueryParams,
) => {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.users.all,
      params.page,
      params.limit,
    ],

    queryFn: async () => {
  const allLocalUsers = getLocalUsers();

  const localUsers =
    params.page === 1 ? allLocalUsers : [];

  const apiLimit =
    params.page === 1
      ? Math.max(
          0,
          params.limit - localUsers.length,
        )
      : params.limit;

  const apiSkip =
    params.page === 1
      ? 0
      : (params.page - 1) * params.limit -
        allLocalUsers.length;

  const response =
    await userService.getUsers(
      params,
      apiLimit,
      Math.max(0, apiSkip),
    );

  return {
    ...response,
    users: [
      ...localUsers,
      ...response.users.map(
        mapUserDtoToUser,
      ),
    ],
    total:
      response.total +
      allLocalUsers.length,
  };
},
  });
};