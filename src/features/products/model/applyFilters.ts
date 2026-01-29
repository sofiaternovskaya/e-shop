import { ProductDTO, ProductsFilters } from "./types";

export const applyFilters = (data: ProductDTO[], filters?: ProductsFilters) => {
  if (filters?.search) {
    data = data.filter((p) =>
      p.title.toLowerCase().includes(filters.search!.toLowerCase()),
    );
  }

  if (filters?.minPrice !== undefined) {
    data = data.filter((p) => p.price_cents >= filters.minPrice! * 100);
  }

  if (filters?.maxPrice !== undefined) {
    data = data.filter((p) => p.price_cents <= filters.maxPrice! * 100);
  }

  if (filters?.gender) {
    data = data.filter((p) => p.gender === filters.gender);
  }

  if (filters?.section) {
    data = data.filter((p) => p.section === filters.section);
  }

  return data;
};
