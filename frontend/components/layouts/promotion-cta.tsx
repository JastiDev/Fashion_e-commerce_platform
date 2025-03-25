import Link from "next/link";

function PromotionCta() {
  return (
    <section className="bg-black hidden sm:block text-center text-white text-[12px] font-satoshi py-2">
      <p>
        Sign up and get 20% off to your first oder.{" "}
        <Link href="#" className="text-white hover:underline">
          Sign up Now
        </Link>
      </p>
    </section>
  );
}

export default PromotionCta;
