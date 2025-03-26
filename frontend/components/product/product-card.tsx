/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import Rating from "./rating";
import { Product } from "@/types";

function ProductCard({
  slug,
  title,
  price,
  discountPrice,
  images,
  rating,
  reviews,
}: Product) {
  const calculateDiscountPercentage = (newPrice: number, oldPrice: number) => {
    if (oldPrice <= 0) {
      throw new Error("Old price must be greater than zero.");
    }
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  return (
    <Link href={`/products/${slug}`} className="group cursor-pointer">
      <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden rounded-xl">
        <img
          src={images[0]}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-medium mb-2 text-sm md:text-base">{title}</h3>
      <div className="flex items-center gap-2 mb-2">
        <Rating rating={rating} />
        <span className="text-sm text-gray-500">({reviews.length})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">${price}</span>
        {discountPrice && (
          <span className="text-gray-400 line-through">${discountPrice}</span>
        )}
        {discountPrice && (
          <span className=" bg-rose-50 text-rose-500 px-2 py-1 text-sm rounded-full">
            {calculateDiscountPercentage(price, discountPrice)}%
          </span>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
