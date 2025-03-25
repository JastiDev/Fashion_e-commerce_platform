/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Product } from "@/types";
import Pagination from "@/components/product/pagination";
import SortFilter from "@/components/product/sort-filter";
import ProductGrid from "@/components/product/product-grid";
import ProductFilter from "@/components/product/product-filter";

async function fetchProducts(
  params: Record<string, string | number>
): Promise<Product[]> {
  const url = new URL("https://fabriqueapi.onrender.com/api/products");

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

const ProductsPage = async ({
  searchParams: rawSearchParams,
}: {
  searchParams: any;
}) => {
  try {
    const searchParams = await rawSearchParams;

    const products: Product[] = await fetchProducts(searchParams);

    return (
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="flex gap-8">
          <ProductFilter />
          <div className="flex-1">
            <SortFilter />
            <ProductGrid products={products} />
            <Pagination />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8 mb-16">
        <h1 className="text-red-500">Failed to load products</h1>
      </div>
    );
  }
};

export default ProductsPage;
