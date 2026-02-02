import { Link } from "react-router";
import { Product } from "../features/products/model/types";
import { AddToCartButton } from "../components/AddToCartButton";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className="group relative">
      <img
        alt={product.title}
        src={product.image}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 mb-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
};
