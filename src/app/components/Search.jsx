"use client";

import { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import SearchRecommendations from "./SearchRecommendations";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(false);
  const keyDownTimer = useRef(undefined);

  useEffect(() => {
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
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchValue}&apikey=EF5DSD29211PHUA8`,
        )
          .then((response) => response.json())
          .then((data) => {
            setRecommendations(data.bestMatches);
          });
      }, 300);
    }
  }, [searchValue]);

  function handleSearch(val) {
    setSearchValue(val);
    setIsRecommendationsOpen(true);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchRecommendations
        searchValue={searchValue}
        recommendations={recommendations}
        isRecommendationsOpen={isRecommendationsOpen}
      />
    </>
  );
}
