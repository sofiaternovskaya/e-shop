import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./layout/AppShell";
import { HomePage } from "../pages/HomePage";
import { Feed } from "../pages/Feed";
import { Product } from "../pages/Product";

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <Feed /> },
      { path: "/products/:id", element: <Product /> },
    ],
  },
]);
