import { LoginPage } from "@/features/auth/pages/LoginPage";
import { ForbiddenPage, NotFoundPage } from "@/features/errors/pages";
import { UsersPage } from "@/features/users/pages/UsersPage";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";

import type { AppRoute } from "./route.types";

export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  USERS: "/users",
  SETTINGS: "/settings",
  FORBIDDEN: "/403",
   NOT_FOUND: "/404",
USER_DETAIL: "/users/:id",
USER_CREATE: "/users/create",
USER_EDIT: "/users/:id/edit",
} as const;

export const appRoutes: AppRoute[] = [
  {
    path: ROUTES.LOGIN,
    title: "Login",
    component: LoginPage,
  },

  {
    path: ROUTES.USERS,
    title: "Users",
    component: UsersPage,
    requiresAuth: true,
    permissions: ["users:view"],
    showInSidebar: true,
  },

  {
    path: ROUTES.SETTINGS,
    title: "Settings",
    component: SettingsPage,
    requiresAuth: true,
    permissions: ["settings:view"],
    showInSidebar: true,
  },

  {
    path: ROUTES.FORBIDDEN,
    title: "Forbidden",
    component: ForbiddenPage,
  },

  {
    path: "*",
    title: "Not Found",
    component: NotFoundPage,
  },
];