import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import SearchInput from "../shared/search-input";
import { PiUserCircleBold } from "react-icons/pi";

const links = [
  { name: "Shop", href: "/products" },
  { name: "On Sale", href: "/#sale" },
  { name: "New Arrivals", href: "/#new-arrivals" },
  { name: "Brands", href: "/brands" },
];

function Header() {
  return (
    <header className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center gap-6">
        <Link
          href="/"
          className="text-center sm:text-left text-3xl font-bold font-icf text-black "
        >
          FABRIQUE.CO
        </Link>

        <nav className="hidden sm:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:text-gray-800"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <SearchInput />
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <Cart />
          <PiUserCircleBold />
        </div>
      </div>
    </header>
  );
}

function Cart() {
  return (
    <div className="relative">
      <LuShoppingCart />
      <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
        0
      </div>
    </div>
  );
}

export default Header;
