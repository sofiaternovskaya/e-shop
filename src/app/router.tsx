import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./layout/AppShell";
import { HomePage } from "../pages/HomePage";
import { Feed } from "../pages/Feed";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <Feed /> },
      { path: "/products/:productId", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
