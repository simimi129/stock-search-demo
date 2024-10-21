"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(false);
  const keyDownTimer = useRef(undefined);

  useEffect(() => {
    // if (localStorage.getItem("searchResults")) {
    //   const bestMatches = JSON.parse(localStorage.getItem("searchResults"));
    //   setRecommendations(bestMatches.bestMatches);
    // }

    document.addEventListener("click", () => {
      setIsRecommendationsOpen(false);
    });
  }, []);

  useEffect(() => {
    if (searchValue) {
      if (keyDownTimer) {
        clearTimeout(keyDownTimer.current);
      }
      keyDownTimer.current = setTimeout(() => {
        fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchValue}&apikey=EF5DSD29211PHUA8`
        )
          .then((response) => response.json())
          .then((data) => {
            // localStorage.setItem("searchResults", JSON.stringify(data));
            setRecommendations(data.bestMatches);
            // setIsRecommendationsOpen(true);
          });
      }, 300);
    }
  }, [searchValue]);

  function handleSearch(val) {
    setSearchValue(val);
    setIsRecommendationsOpen(true);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[400px] w-full min-w-[200px] flex flex-col">
        <h2>Search for a stock</h2>
        <SearchBar onSearch={handleSearch} />
        {isRecommendationsOpen && searchValue && recommendations && (
          <div className="bg-gray-100 p-1 rounded mt-1">
            {recommendations?.map((recommendation) => (
              <Link
                href={`/details/${recommendation["1. symbol"]}`}
                key={recommendation["1. symbol"]}
                className="hover:bg-gray-300 rounded p-1 cursor-pointer flex justify-between gap-30">
                <span className="font-bold">{recommendation["1. symbol"]}</span>
                <span className="truncate">{recommendation["2. name"]}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
