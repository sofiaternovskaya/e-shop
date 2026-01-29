export type Gender = "male" | "female";
export type Section = "tops" | "bottoms" | "shoes";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  gender: Gender;
  section: Section;
};

export type ProductDTO = {
  id: string;
  title: string;
  price_cents: number;
  image: string;
  gender: Gender;
  section: Section;
};

export const PRODUCT_FILTER_KEYS = [
  "search",
  "minPrice",
  "maxPrice",
  "gender",
  "section",
] as const;

export type ProductFilterKey = (typeof PRODUCT_FILTER_KEYS)[number];

export type ProductsFilters = {
  [K in ProductFilterKey]?: K extends "search"
    ? string
    : K extends "minPrice" | "maxPrice"
      ? number
      : K extends "gender"
        ? Gender
        : K extends "section"
          ? Section
          : never;
};
