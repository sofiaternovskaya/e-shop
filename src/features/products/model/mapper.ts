import { Product, ProductDTO } from "./types";

export const mapProduct = (dto: ProductDTO): Product => ({
  id: dto.id,
  title: dto.title,
  price: dto.price_cents / 100,
  image: dto.image,
});
