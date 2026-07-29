import { apiClient } from "@/api/client";
import { API_ENDPOINTS } from "@/api/endpoints";

import type {
  UserDto,
  UsersResponseDto,
} from "../dto";

import type { UserFormValues } from "../schemas/user.schema";

export const userService = {
  async getUsers() {
    const response =
      await apiClient.get<UsersResponseDto>(
        API_ENDPOINTS.users.list,
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

