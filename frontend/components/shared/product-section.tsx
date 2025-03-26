import Link from "next/link";
import ProductCard from "../product/product-card";
import { Product } from "@/types";

async function fetchProducts(url: string): Promise<Product[]> {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

interface Props {
  title: string;
  id: string;
  endpoint: string;
  linkUrl: string;
}
async function ProductSection({ title, id, endpoint, linkUrl }: Props) {
  const products = await fetchProducts(endpoint);

  return (
    <section id={id} className="container mx-auto py-16">
      <div className="flex justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">
          {title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link
          href={linkUrl}
          className="h-14 w-full md:w-fit flex items-center justify-center px-14 text-sm font-semibold text-black border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          View All
        </Link>
      </div>
    </section>
  );
}

export default ProductSection;
