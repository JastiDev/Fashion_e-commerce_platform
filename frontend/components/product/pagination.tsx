import React from "react";
function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button className="px-3 py-1 border rounded">Previous</button>
      {[1, 2, 3, "...", 9, 10].map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded ${
            page === 1 ? "bg-black text-white" : "text-gray-600"
          }`}
        >
          {page}
        </button>
      ))}
      <button className="px-3 py-1 border rounded">Next</button>
    </div>
  );
}

export default Pagination;
