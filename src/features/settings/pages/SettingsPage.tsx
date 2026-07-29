import { Navigate } from "react-router-dom";

import { Page } from "@/shared/components/page/Page";

import { usePermission } from "@/features/auth/hooks/usePermission";
import { PERMISSIONS } from "@/features/auth/types/permission.types";
import { ROUTES } from "@/routes/route.config";

export const SettingsPage = () => {
  const canViewSettings = usePermission(
    PERMISSIONS.SETTINGS_VIEW,
  );

  if (!canViewSettings) {
    return (
      <Navigate
        to={ROUTES.FORBIDDEN}
        replace
      />
    );
  }

  return (
    <Page title="Settings">
      <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Settings
        </h2>

        <p className="text-gray-600">
          This page is only accessible to
          Administrators.
        </p>
      </div>
    </Page>
  );
};