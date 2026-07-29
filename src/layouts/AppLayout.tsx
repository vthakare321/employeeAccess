import { Outlet } from "react-router-dom";

import { Header } from "@/shared/components/Header/Header";
import { Sidebar } from "@/shared/components/Sidebar/Sidebar";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};