"use client";
import React from "react";
import { cn } from "@/lib/utils";

function ProductFilter() {
  const [priceRange, setPriceRange] = React.useState([1, 200]);
  const [selectedSizes, setSelectedSizes] = React.useState<string[]>([]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  React.useEffect(() => {
    const fetchCategoris = async () => {
      const res = await fetch("https://fabriqueapi.onrender.com/api/categories");
      const data = await res.json();
      console.log(data);
    };
    fetchCategoris();
  }, []);

  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-4">
        <h2 className="font-bold text-xl mb-2">Filters</h2>
        <hr className="mb-3 border-gray-300" />
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Categories</h3>
          <div className="flex flex-col gap-2">
            {["Casual", "Formal", "Footwear", "Asscessory"].map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Price</h3>
          <input
            type="range"
            min="50"
            max="200"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"].map(
              (color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${
                    selectedColors.includes(color)
                      ? "ring-2 ring-offset-2 ring-blue-500"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    if (selectedColors.includes(color)) {
                      setSelectedColors(
                        selectedColors.filter((c) => c !== color)
                      );
                    } else {
                      setSelectedColors([...selectedColors, color]);
                    }
                  }}
                />
              )
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={cn(
                  "px-2 py-1 text-sm rounded bg-gray-100 text-gray-900",
                  selectedSizes.includes(size) && "bg-black text-white"
                )}
                onClick={() => {
                  if (selectedSizes.includes(size)) {
                    setSelectedSizes(selectedSizes.filter((s) => s !== size));
                  } else {
                    setSelectedSizes([...selectedSizes, size]);
                  }
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-md">
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default ProductFilter;
