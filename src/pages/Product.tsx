import { useParams } from "react-router-dom";
import { useProduct } from "../features/products/api/useProduct";

export const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading } = useProduct(productId);

  if (isLoading) return <div>Loading…</div>;
  if (!data) return <div>Product not found</div>;

  return <div>{data.title}</div>;
};
