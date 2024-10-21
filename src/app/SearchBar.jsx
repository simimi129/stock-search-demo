"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  function setSearch(e) {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  }

  function resetSearch() {
    setSearchValue("");
    onSearch("");
  }

  return (
    <div className="flex w-full rounded-md overflow-hidden p-2 gap-2 items-center bg-gray-100">
      <IoSearchOutline className="text-gray-500 text-2xl" />
      <input
        className="bg-gray-100 w-full outline-none"
        type="text"
        placeholder="Start typing..."
        value={searchValue}
        onChange={setSearch}
      />
      <IoCloseCircle
        onClick={resetSearch}
        className="cursor-pointer text-gray-500 hover:text-gray-600 text-2xl"
      />
    </div>
  );
}
