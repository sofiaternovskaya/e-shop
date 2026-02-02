import { RouterProvider } from "react-router";
import { CartProvider } from "./producers/CartProvider";
import { router } from "./router";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
