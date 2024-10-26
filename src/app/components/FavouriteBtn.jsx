"use client";

import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

export default function FavouriteBtn({ stockQuote, stockOverview }) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = getFavouritesFromLocalStorage();
    if (
      favourites?.find(
        (fav) => fav.stockOverview["Symbol"] === stockOverview["Symbol"]
      )
    ) {
      setIsFavourite(true);
    }
  }, []);

  function addFavourite() {
    const newFav = {
      stockQuote,
      stockOverview,
    };

    let favourites = getFavouritesFromLocalStorage();
    favourites ? favourites.push(newFav) : (favourites = [newFav]);

    setFavouritesInLocalStorage(favourites);
    setIsFavourite(true);
  }

  function removeFavourite() {
    let favourites = getFavouritesFromLocalStorage();
    if (favourites) {
      favourites = favourites.filter(
        (fav) => fav.stockOverview["Symbol"] !== stockOverview["Symbol"]
      );
      setFavouritesInLocalStorage(favourites);
      setIsFavourite(false);
    }
  }

  function getFavouritesFromLocalStorage() {
    return JSON.parse(localStorage.getItem("favourites"));
  }

  function setFavouritesInLocalStorage(favourites) {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }

  return (
    <>
      {isFavourite ? (
        <FaStar onClick={removeFavourite} className="cursor-pointer" />
      ) : (
        <FaRegStar onClick={addFavourite} className="cursor-pointer" />
      )}
    </>
  );
}
