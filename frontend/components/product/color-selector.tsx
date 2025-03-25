import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  colors: string[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

function ColorSelector({
  colors = [],
  selectedColor,
  setSelectedColor,
}: Props) {
  console.log(colors);
  console.log(selectedColor);
  return (
    <div className="mt-5">
      <h3 className="text-sm font-medium mb-2">Select Colors</h3>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <button
            key={index}
            className={cn(
              "w-8 h-8 rounded-full",
              selectedColor === color && "ring-2 ring-offset-2 ring-blue-500"
            )}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
