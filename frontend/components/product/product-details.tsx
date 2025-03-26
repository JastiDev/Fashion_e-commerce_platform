"use client";
import { useState } from "react";
import { Product } from "@/types";
import Rating from "@/components/product/rating";
import SizeSelector from "@/components/shared/size-selector";
import ImagePreview from "@/components/product/image-preview";
import ColorSelector from "@/components/product/color-selector";
import ProductRecommend from "@/components/product/product-recommend";

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ImagePreview images={product?.images} title={product.title} />

        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <Rating rating={product?.rating} />
            <span className="text-gray-600 ml-2">{product?.rating || 0}/5</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold">
              ${product.price}
            </span>
            <span className="text-gray-500 line-through">${product.price}</span>
            {product.discountPrice && (
              <span className="text-red-500">-{100}%</span>
            )}
          </div>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            {product.description}
          </p>
          <hr className="mt-4 border-gray-300" />

          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />

          <hr className="mt-6 border-gray-300" />

          <SizeSelector
            sizes={product?.sizes || []}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <hr className="mt-7 border-gray-300" />

          {/* Quantity and Add to Cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border rounded-md">
              <button
                className="px-4 py-2 text-gray-600"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-16 text-center border-x"
              />
              <button
                className="px-4 py-2 text-gray-600"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ProductRecommend />
    </main>
  );
}
