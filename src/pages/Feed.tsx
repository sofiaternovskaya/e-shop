import { useSearchParams } from "react-router";
import { setPage } from "../features/pagination/routing/setPage";
import { parsePagination } from "../features/pagination/routing/parsePagination";
import { Pagination } from "../components/Pagination";
import { parseProductsQuery } from "../features/products/model/parseProductsQuery";
import { useProducts } from "../features/products/api/useProducts";
import { ProductCard } from "../components/ProductCard";

export const Feed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filters, pagination } = parseProductsQuery(searchParams);
  const { page, limit } = parsePagination(searchParams);

  const { data, isLoading } = useProducts(pagination, filters);

  if (isLoading) return <div>Loading…</div>;

  if (!data || data.items.length === 0) {
    return <div>Nothing to show</div>;
  }

  return (
    <div className="pb-10">
      <div className="mb-6 px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="px-8 flex justify-center md:justify-start sm:width-full">
        <Pagination
          page={page}
          total={Math.ceil(data?.total / limit)}
          onPageChange={(curPage) =>
            setPage(searchParams, setSearchParams, curPage)
          }
        />
      </div>
    </div>
  );
};
