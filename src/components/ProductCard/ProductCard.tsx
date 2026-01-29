import { Link } from "react-router";
import { Product } from "../../features/products/model/types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1>
        <Link to={`/products/${product.id}`}>ProductCard {product.id}</Link>
      </h1>
      <h2>{product.title}</h2>
      <h2>{product.gender}</h2>
      <h2>{product.section}</h2>
      <h2>{product.price}</h2>
    </div>
  );
};
