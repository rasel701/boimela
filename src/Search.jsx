import React from "react";

const Search = () => {
  return (
    <div className="border-2 border-gray-400  m-4 rounded">
      <input
        className="w-[100%] p-1.5 outline-0"
        type="text"
        placeholder="search books..."
      />
    </div>
  );
};

export default Search;
