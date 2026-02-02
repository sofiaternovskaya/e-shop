import { useEffect, useReducer } from "react";
import { cartReducer } from "../model/cartReducer";
import { CartState } from "../model/types";
import { loadCart, saveCart } from "../lib/storage";

const initialState: CartState = { items: [] };

export const useCart = () => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    () => loadCart() ?? initialState,
  );

  useEffect(() => {
    saveCart(state);
  }, [state]);

  return { state, dispatch };
};
