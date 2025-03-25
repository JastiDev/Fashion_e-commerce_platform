/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductDetails from "@/components/product/product-details";

async function fetchProductDetails(slug: string) {
  const res = await fetch(`https://fabriqueapi.onrender.com/api/products/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Product not found`);
  }

  return res.json();
}

export default async function ProductDetailsPage({
  params: rawParams,
}: {
  params: any;
}) {
  const params = await rawParams;
  const { slug } = params;

  const product = await fetchProductDetails(slug);

  return <ProductDetails product={product} />;
}
