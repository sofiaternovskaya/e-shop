import { useProducts } from "../features/products/api/useProducts";
import { ProductCard } from "../components/ProductCard/ProductCard";

export const Feed = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) return <div>Loading…</div>;

  return (
    <div>
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
