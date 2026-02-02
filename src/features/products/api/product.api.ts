import raw from "../data/products.json";
import { ProductDTO } from "../model/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProductById = async (
  id: string,
): Promise<ProductDTO | null> => {
  await delay(400);

  const product = (raw as ProductDTO[]).find((p) => p.id === id);
  return product ?? null;
};
