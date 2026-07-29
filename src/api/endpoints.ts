

export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
  },

  users: {
    list: "/users",
    detail: (id: number) => `/users/${id}`,
    create: "/users/add",
    update: (id: number) => `/users/${id}`,
    delete: (id: number) => `/users/${id}`,
   
  },
} as const;