"use client";

import { useEffect, useState } from "react";
import StockDetailsClient from "../components/StockDetailsClient";

export default function FavouriteStocksPage() {
  const [favouriteStocks, setFavouriteStocks] = useState([]);

  useEffect(() => {
    getFavouriteStocks();
  }, []);

  function getFavouriteStocks() {
    if (localStorage.getItem("favourites")) {
      setFavouriteStocks(JSON.parse(localStorage.getItem("favourites")));
    }
  }

  return (
    <div className="flex max-h-min w-full max-w-[1000px] flex-wrap justify-center gap-4">
      {favouriteStocks.map((stock) => (
        <StockDetailsClient
          key={stock["stockOverview"]["Symbol"]}
          stockQuote={stock["stockQuote"]}
          stockOverview={stock["stockOverview"]}
        />
      ))}
    </div>
  );
}
