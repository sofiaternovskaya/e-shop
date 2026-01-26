import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./products.api";
import { mapProduct } from "../model/mapper";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await fetchProducts();
      return data.map(mapProduct);
    },
  });
