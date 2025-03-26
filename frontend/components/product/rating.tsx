import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

function Rating({ rating = 0 }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4 fill-gray-200 text-gray-200",
            index < Math.floor(rating) && "fill-yellow-400 text-yellow-400"
          )}
        />
      ))}
    </div>
  );
}

export default Rating;
