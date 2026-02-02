import { useParams } from "react-router-dom";
import { useProduct } from "../features/products/api/useProduct";
import { useCart } from "../features/cart/hooks/useCart";

export const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading } = useProduct(productId);
  const { dispatch } = useCart();

  if (isLoading) return <div>Loading…</div>;
  if (!data) return <div>Product not found</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
            item: {
              productId: data.id,
              title: data.title,
              price: data.price,
              image: data.image,
              quantity: 1,
            },
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
