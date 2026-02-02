import { createContext } from "react";
import { useCart } from "../../features/cart/hooks/useCart";

const CartContext = createContext<ReturnType<typeof useCart> | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const cart = useCart();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
