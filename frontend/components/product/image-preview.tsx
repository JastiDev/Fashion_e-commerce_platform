/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  images: string[];
  title: string;
}

function ImagePreview({ images = [], title }: Props) {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);
  return (
    <div className="md:w-1/2 flex flex-col sm:flex-row gap-4">
      <div className="flex sm:flex-col gap-4">
        {images?.map((image, index) => (
          <div
            key={index}
            className={cn(
              "p-2 cursor-pointer border border-gray-200 rounded-lg ",
              selectedImage === image && "border-blue-500"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-20 h-20">
              <img
                src={image || "/placeholder2.png"}
                alt={title}
                className="object-cover object-center rounded"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 relative h-80 sm:h-[500px] rounded-xl">
        <img
          src={selectedImage || "/placeholder2.png"}
          alt={title}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default ImagePreview;
