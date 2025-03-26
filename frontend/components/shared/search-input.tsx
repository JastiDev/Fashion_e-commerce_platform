"use client";

import { redirect } from "next/navigation";
import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  const [keyword, setSearchQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword) return;

    redirect(`/products?keyword=${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex items-center relative">
      <input
        value={keyword}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 px-4 bg-gray-100 border border-gray-200 outline-none focus-within:ring-2 focus-within:ring-black rounded-full duration-300"
        type="text"
        placeholder="Search for products..."
      />
      <BsSearch
        className="absolute right-0 top-0 mr-4 mt-3 text-gray-400"
        size={20}
      />
    </form>
  );
}

export default SearchInput;
