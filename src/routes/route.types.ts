import type { ComponentType } from "react";

import type { Permission } from "@/features/auth/types/permission.types";

export interface AppRoute {
  path: string;
  component: ComponentType;

  title: string;

  requiresAuth?: boolean;

  permissions?: Permission[];

  showInSidebar?: boolean;
}