import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Permission } from "../types/permission.types";
import type { AuthUser } from "../models/AuthUser";

interface AuthState {
  user: AuthUser | null;
  permissions: Permission[];
  isAuthenticated: boolean;

  login: (user: AuthUser, permissions: Permission[]) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      permissions: [],
      isAuthenticated: false,

      login: (user, permissions) =>
        set({
          user,
          permissions,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          permissions: [],
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);