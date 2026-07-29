import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "@/layouts/AppLayout";

import { LoginPage } from "@/features/auth/pages/LoginPage";
import {
  ForbiddenPage,
  NotFoundPage,
} from "@/features/errors/pages";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";
import {
  UsersPage,
  UserDetailPage,
  UserEditPage,
  CreateUserPage,
} from "@/features/users/pages";

import { ProtectedRoute } from "./ProtectedRoute";
import { ROUTES } from "./route.config";

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.LOGIN} replace />,
  },

  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: ROUTES.USERS,
            element: <UsersPage />,
          },
          {
            path: ROUTES.USER_CREATE,
            element: <CreateUserPage />,
          },
          {
            path: ROUTES.USER_DETAIL,
            element: <UserDetailPage />,
          },
          {
            path: ROUTES.USER_EDIT,
            element: <UserEditPage />,
          },

          {
            path: ROUTES.SETTINGS,
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },

  {
    path: ROUTES.FORBIDDEN,
    element: <ForbiddenPage />,
  },

  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
  path: "*",
  element: <Navigate to={ROUTES.NOT_FOUND} replace />,
},
]);