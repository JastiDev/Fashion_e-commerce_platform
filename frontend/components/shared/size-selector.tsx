import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  sizes: string[];
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}
function SizeSelector({
  label = "Choose Size",
  sizes = [],
  selectedSize,
  setSelectedSize,
}: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium mb-2">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={cn(
              "px-4 py-2 rounded-md bg-gray-100 text-gray-900",
              selectedSize === size && "bg-black text-white"
            )}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
