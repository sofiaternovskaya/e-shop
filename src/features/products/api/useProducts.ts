import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./products.api";
import { mapProduct } from "../model/mapper";
import { ProductsFilters } from "../model/types";

export const useProducts = (filters?: ProductsFilters) =>
  useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      const data = await fetchProducts(filters);
      return data.map(mapProduct);
    },
  });
