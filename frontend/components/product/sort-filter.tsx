import React from "react";

function SortFilter({}) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Casual</h1>
      <select className="border rounded-md px-2 py-1">
        <option>Most Popular</option>
        <option>Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortFilter;
