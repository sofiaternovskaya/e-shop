import { useCart } from "../features/cart/hooks/useCart";

export const Cart = () => {
  const { state } = useCart();

  if (state.items.length === 0) {
    return <div>The cart is empty</div>;
  }

  return (
    <div>
      {state.items.map((item) => (
        <div key={item.productId}>
          {item.title} {item.productId}: {item.quantity}
        </div>
      ))}
    </div>
  );
};
