import Hero from "@/components/home/hero";
import Reviews from "@/components/review/Reviews";
import ProductSection from "@/components/shared/product-section";
import CategorySection from "@/components/category/category-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductSection
        id="new-arrivals"
        title="NEW ARRIVALS"
        endpoint="https://fabriqueapi.onrender.com/api/products?limit=4"
        linkUrl="/products"
      />
      <ProductSection
        id="sale"
        title="Top selling"
        endpoint="https://fabriqueapi.onrender.com/api/products?limit=4"
        linkUrl="/products"
      />
      <CategorySection />
      <Reviews />
    </main>
  );
}
