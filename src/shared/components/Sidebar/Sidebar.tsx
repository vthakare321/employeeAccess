import { NavLink } from "react-router-dom";

import { ROUTES } from "@/routes/route.config";

export const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Dashboard
        </h2>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        <NavLink
          to={ROUTES.USERS}
          className={({ isActive }) =>
            [
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100",
            ].join(" ")
          }
        >
          Users
        </NavLink>

        <NavLink
          to={ROUTES.SETTINGS}
          className={({ isActive }) =>
            [
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100",
            ].join(" ")
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};