import { Product } from "@/types";
import ProductCard from "./product-card";

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}

export default ProductGrid;
