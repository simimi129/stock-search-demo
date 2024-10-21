"use client";

import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

export default function StockDetails({
  stockQuote,
  stockOverview,
  onRemoveFavourite,
}) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites) {
      favourites.forEach((fav) => {
        if (fav.stockOverview["Symbol"] === stockOverview["Symbol"]) {
          setIsFavourite(true);
        }
      });
    }
  }, []);

  function addFavourite() {
    const newFav = {
      stockQuote,
      stockOverview,
    };
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites) {
      favourites.push(newFav);
    } else {
      favourites = [newFav];
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    setIsFavourite(true);
  }

  function removeFavourite() {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites) {
      favourites = favourites.filter(
        (fav) => fav.stockOverview["Symbol"] !== stockOverview["Symbol"]
      );
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setIsFavourite(false);
      onRemoveFavourite();
    }
  }

  return (
    <div className="flex items-center justify-between max-w-[400px] w-full min-w-[200px] bg-gray-100 p-2 rounded-md">
      <div className="flex flex-col">
        <div className="font-bold">{stockOverview["Symbol"]}</div>
        <div className="text-gray-600">{stockOverview["Name"]}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-gray-600 text-sm">Price</div>
        <div>{stockQuote["05. price"]}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-gray-600 text-sm">Change</div>
        <div
          className={
            stockQuote["09. change"] > 0 ? "text-green-500" : "text-red-500"
          }>
          {stockQuote["09. change"]} ({stockQuote["10. change percent"]})
        </div>
      </div>

      {isFavourite ? (
        <FaStar onClick={removeFavourite} className="cursor-pointer" />
      ) : (
        <FaRegStar onClick={addFavourite} className="cursor-pointer" />
      )}
    </div>
  );
}
