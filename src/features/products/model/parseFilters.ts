import { ProductsFilters } from "./types";
import { PRODUCT_FILTER_KEYS } from "./types";

export const parseProductsFilters = (
  params: URLSearchParams,
): ProductsFilters => {
  const result: Partial<ProductsFilters> = {};

  PRODUCT_FILTER_KEYS.forEach((key) => {
    const value = params.get(key);
    if (!value) return;

    switch (key) {
      case "minPrice":
      case "maxPrice":
        result[key] = Number(value);
        break;
      case "search":
        result[key] = value;
        break;
      case "gender":
        result[key] = value as ProductsFilters["gender"];
        break;
      case "section":
        result[key] = value as ProductsFilters["section"];
        break;
    }
  });

  return result;
};
