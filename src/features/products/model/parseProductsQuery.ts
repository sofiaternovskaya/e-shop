import { parsePagination } from "../../pagination/routing/parsePagination";
import { parseProductsFilters } from "./parseProductsFilters";

export const parseProductsQuery = (params: URLSearchParams) => ({
  filters: parseProductsFilters(params),
  pagination: parsePagination(params),
});
