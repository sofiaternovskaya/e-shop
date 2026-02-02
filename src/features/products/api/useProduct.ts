import { useQuery } from "@tanstack/react-query";
import { mapProduct } from "../model/mapper";
import { fetchProductById } from "./product.api";

export const useProduct = (id: string | undefined) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) return null;
      const dto = await fetchProductById(id);
      return dto ? mapProduct(dto) : null;
    },
    enabled: Boolean(id),
  });
