import raw from "../data/products.json";
import { ProductDTO } from "../model/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (): Promise<ProductDTO[]> => {
  await delay(400);
  return raw as ProductDTO[];
};
