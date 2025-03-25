import { Category } from "@/types";
import CategoryCard from "./category-card";

function CategorySection() {
  const categories: Category[] = [
    { slug: "casual", title: "Casual", image: "/casual-style.png" },
    { slug: "formal", title: "Formal", image: "/formal-style.png" },
    { slug: "footwear", title: "Footwear", image: "/footwear.jpg" },
    { slug: "asscessories", title: "Asscessories", image: "/asscessories.png" },
  ];

  return (
    <section className="container mx-auto mb-16 bg-offwhited py-16 px-4 md:px-8 rounded-3xl">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          BROWSE BY CATEGORIES
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
