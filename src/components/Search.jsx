import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    onSearch(query.toLowerCase()); // Pass the lowercase search query to the parent component
  };

  return (
    <div >
      <input
        type="text"
        placeholder="Search for..."
        value={searchQuery}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="border border-gray-500 w-full md:w-60 md:w-70  p-2 rounded "
      />
    </div>
  );
};

export default Search;
