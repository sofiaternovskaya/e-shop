import { useCart } from "../features/cart/hooks/useCart";

type TProps = {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
};

export const AddToCartButton = ({ product }: TProps) => {
  const { state, dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD",
      item: {
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    });
  };

  const reduceQty = () => {
    dispatch({
      type: "CHANGE_QTY",
      productId: product.id,
      qty: 1,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE",
      productId: product.id,
    });
  };

  const currentItem = state.items.find((item) => item.productId === product.id);
  const isInCart = !!currentItem;
  const currentQty = currentItem?.quantity || 0;

  if (isInCart) {
    return (
      <div className="p-2 flex justify-between alingn-center relative z-10 bg-gray-500 rounded-md text-white">
        <button
          onClick={currentQty > 1 ? reduceQty : removeFromCart}
          className="px-4 text-white hover:cursor-pointer hover:text-black z-11"
        >
          -
        </button>
        <span>{currentQty}</span>
        <button
          onClick={addToCart}
          className="px-4 text-white hover:cursor-pointer hover:text-black z-11"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={addToCart}
      className="relative z-10 p-2 flex align-center justify-center w-full rounded-md bg-gray-700 text-white hover:bg-gray-600 hover:cursor-pointer transition duration-150"
    >
      Add to cart
    </button>
  );
};
