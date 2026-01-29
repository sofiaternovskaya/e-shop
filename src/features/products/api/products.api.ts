import { Pagination } from "../../pagination/model/types";
import { applyFilters } from "../model/applyFilters";
import raw from "../data/products.json";
import { ProductDTO, ProductsFilters } from "../model/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (
  pagination: Pagination,
  filters?: ProductsFilters,
): Promise<{ items: ProductDTO[]; total: number }> => {
  await delay(400);

  const data = applyFilters(raw as ProductDTO[], filters);

  const start = (pagination.page - 1) * pagination.limit;
  const end = start + pagination.limit;

  return {
    items: data.slice(start, end),
    total: data.length,
  };
};
