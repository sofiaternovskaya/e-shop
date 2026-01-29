import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./products.api";
import { Pagination } from "../../pagination/model/types";
import { mapProduct } from "../model/mapper";
import { ProductsFilters } from "../model/types";

export const useProducts = (
  pagination: Pagination,
  filters?: ProductsFilters,
) =>
  useQuery({
    queryKey: ["products", filters, pagination],
    queryFn: async () => {
      const data = await fetchProducts(pagination, filters);
      return {
        items: data.items.map(mapProduct),
        total: data.total,
      };
    },
  });
