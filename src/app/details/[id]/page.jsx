"use client";

import StockDetails from "@/app/components/StockDetails";
import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts";
import dayjs from "dayjs";

export default function StockDetailsPage({ params }) {
  const [stockTimeSeries, setStockTimeSeries] = useState([]);
  const [stockQuote, setStockQuote] = useState({});
  const [stockOverview, setStockOverview] = useState({});

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("details"))[
  //     "Monthly Time Series"
  //   ];
  //   let sts = [];
  //   for (const [key, value] of Object.entries(data).slice(0, 12)) {
  //     sts = [...sts, { x: new Date(key), y: Number(value["4. close"]) }];
  //   }
  //   setStockTimeSeries(sts);
  //   setStockQuote(
  //     JSON.parse(localStorage.getItem("details-quote"))["Global Quote"]
  //   );
  //   setStockOverview(JSON.parse(localStorage.getItem("details-overview")));
  // }, []);

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${params.id}&apikey=EF5DSD29211PHUA8`
    )
      .then((response) => response.json())
      .then((data) => {
        //localStorage.setItem("details-time-series", JSON.stringify(data));
        let sts = [];
        for (const [key, value] of Object.entries(
          data["Monthly Time Series"]
        ).slice(0, 12)) {
          sts = [...sts, { x: new Date(key), y: Number(value["4. close"]) }];
        }
        setStockTimeSeries(sts);
      });
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${params.id}&apikey=EF5DSD29211PHUA8`
    )
      .then((response) => response.json())
      .then((data) => {
        //localStorage.setItem("details-quote", JSON.stringify(data));
        setStockQuote(data["Global Quote"]);
      });
    fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.id}&apikey=EF5DSD29211PHUA8`
    )
      .then((response) => response.json())
      .then((data) => {
        //localStorage.setItem("details-overview", JSON.stringify(data));
        setStockOverview(data);
      });
  }, [params.id]);

  return (
    <div className="flex flex-col items-center">
      <StockDetails stockOverview={stockOverview} stockQuote={stockQuote} />
      <div className="max-w-[1050px] w-full min-w-[200px]">
        <LineChart
          dataset={stockTimeSeries}
          xAxis={[
            {
              dataKey: "x",
              valueFormatter: (date) => dayjs(date).format("YYYY-MM"),
            },
          ]}
          series={[{ dataKey: "y" }]}
          height={300}
        />
      </div>
    </div>
  );
}
