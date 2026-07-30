import { apiClient } from "@/api/client";
import { API_ENDPOINTS } from "@/api/endpoints";
import  type { UserQueryParams } from "../types/userQueryParams";

import type {
  UserDto,
  UsersResponseDto,
} from "../dto";

import type { UserFormValues } from "../schemas/user.schema";

export const userService = {
  async getUsers(
  params: UserQueryParams,
  apiLimit: number = params.limit,
  apiSkip?: number,
) {
  const skip =
    apiSkip ??
    (params.page - 1) * params.limit;

   const endpoint = API_ENDPOINTS.users.list;
 


  const response =
    await apiClient.get<UsersResponseDto>(
      endpoint,
      {
        params: {
         
          limit: apiLimit,
          skip,
          sortBy: params.sortBy,
          order: params.order,
        },
      },
    );

  return response.data;
},
  async getUserById(id: number) {
    const response =
      await apiClient.get<UserDto>(
        API_ENDPOINTS.users.detail(id),
      );

    return response.data;
  },

  async createUser(data: UserFormValues) {
    const response =
      await apiClient.post<UserDto>(
        API_ENDPOINTS.users.create,
        data,
      );

    return response.data;
  },

  async updateUser(
  id: number,
  data: UserFormValues,
) {
  const response = await apiClient.put<UserDto>(
    API_ENDPOINTS.users.update(id),
    data,
  );

  return response.data;
},

 
};

