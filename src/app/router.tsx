import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./layout/AppShell";
import { HomePage } from "../pages/HomePage";
import { Feed } from "../pages/Feed";

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <AppShell />,
    children: [{ path: "/feed", element: <Feed /> }],
  },
]);
