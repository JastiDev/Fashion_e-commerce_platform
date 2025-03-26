"use client";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";

interface Props {
  category: Category;
}

function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="h-full max-h-[289px] relative group cursor-pointer overflow-hidden rounded-lg"
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute top-10 left-10">
        <h3 className="text-xl sm:text-4xl font-semibold text-black">
          {category.title}
        </h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
