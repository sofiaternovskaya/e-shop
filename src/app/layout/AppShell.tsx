import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppShell = () => (
  <>
    <Header />
    <main className="min-h-screen">
      <Outlet />
    </main>
  </>
);
