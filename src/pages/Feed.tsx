import { useSearchParams } from "react-router";
import { parseProductsFilters } from "../features/products/model/parseFilters";
import { useProducts } from "../features/products/api/useProducts";
import { ProductCard } from "../components/ProductCard/ProductCard";

export const Feed = () => {
  const [searchParams] = useSearchParams();
  const filters = parseProductsFilters(searchParams);

  const { data, isLoading } = useProducts(filters);

  if (isLoading) return <div>Loading…</div>;

  return (
    <div>
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
