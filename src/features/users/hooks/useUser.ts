import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { userService } from "../services/user.service";
import { mapUserDtoToUser } from "../mappers/user.mapper";
import {
  getLocalUserById,
  isLocalUser,
} from "../storage/localUserStorage";

export const useUser = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.users.detail(id),

    queryFn: async () => {
     
      if (isLocalUser(id)) {
        const localUser = getLocalUserById(id);

        if (!localUser) {
          throw new Error("User not found");
        }

        return localUser;
      }

      // Otherwise, fetch from DummyJSON
      const response = await userService.getUserById(id);

      return mapUserDtoToUser(response);
    },

    enabled: id > 0,
  });
};