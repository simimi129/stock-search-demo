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
    <div className="flex w-full items-center gap-2 overflow-hidden rounded-md bg-gray-100 p-2">
      <IoSearchOutline className="text-2xl text-gray-500" />
      <input
        className="w-full bg-gray-100 outline-none"
        type="text"
        placeholder="Start typing..."
        value={searchValue}
        onChange={setSearch}
      />
      <IoCloseCircle
        onClick={resetSearch}
        className="cursor-pointer text-2xl text-gray-500 hover:text-gray-600"
      />
    </div>
  );
}
