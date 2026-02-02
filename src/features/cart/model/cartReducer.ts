import { CartState, CartItem } from "./types";

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; productId: string }
  | { type: "CHANGE_QTY"; productId: string; qty: number }
  | { type: "CLEAR" };

export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find(
        (item) => item.productId === action.item.productId,
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.productId === action.item.productId
              ? { ...item, quantity: item.quantity + action.item.quantity }
              : item,
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }

    case "REMOVE":
      return {
        items: state.items.filter(
          (item) => item.productId !== action.productId,
        ),
      };

    case "CHANGE_QTY":
      return {
        items: state.items.map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: action.qty }
            : item,
        ),
      };

    case "CLEAR":
      return { items: [] };
  }
};
