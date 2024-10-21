"use client";

import StockDetails from "@/app/components/StockDetails";
import { useEffect, useState } from "react";

export default function StockDetailsPage({ params }) {
  const [stockTimeSeries, setStockTimeSeries] = useState([]);
  const [stockQuote, setStockQuote] = useState({});
  const [stockOverview, setStockOverview] = useState({});

  useEffect(() => {
    setStockTimeSeries(
      JSON.parse(localStorage.getItem("details"))["Meta Data"]
    );
    setStockQuote(
      JSON.parse(localStorage.getItem("details-quote"))["Global Quote"]
    );
    setStockOverview(JSON.parse(localStorage.getItem("details-overview")));
  }, []);

  useEffect(() => {
    //   fetch(
    //     `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${params.id}&apikey=EF5DSD29211PHUA8`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       localStorage.setItem("details-time-series", JSON.stringify(data));
    //     });
    // fetch(
    //   `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${params.id}&apikey=EF5DSD29211PHUA8`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     localStorage.setItem("details-quote", JSON.stringify(data));
    //   });
    //   fetch(
    //     `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.id}&apikey=EF5DSD29211PHUA8`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       localStorage.setItem("details-overview", JSON.stringify(data));
    //     });
  }, [params.id]);

  return (
    <div className="flex justify-center">
      <StockDetails stockOverview={stockOverview} stockQuote={stockQuote} />
    </div>
  );
}
