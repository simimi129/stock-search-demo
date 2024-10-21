"use client";

import { useEffect, useState } from "react";
import StockDetails from "../components/StockDetails";

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

  function removeFavourite() {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites) {
      favourites = favourites.filter(
        (fav) => fav.stockOverview["Symbol"] !== stockOverview["Symbol"]
      );
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setFavouriteStocks(favourites);
    }
  }

  return (
    <div>
      {favouriteStocks.map((stock) => (
        <StockDetails
          key={stock["stockOverview"]["Symbol"]}
          stockQuote={stock["stockQuote"]}
          stockOverview={stock["stockOverview"]}
          onRemoveFavourite={removeFavourite}
        />
      ))}
    </div>
  );
}
