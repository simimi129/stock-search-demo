"use client";

import { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts";
import dayjs from "dayjs";

export default function StockChart({ id }) {
  const [stockTimeSeries, setStockTimeSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${id}&apikey=EF5DSD29211PHUA8`,
    )
      .then((response) => response.json())
      .then((data) => {
        let sts = [];
        for (const [key, value] of Object.entries(
          data["Monthly Time Series"],
        ).slice(0, 12)) {
          sts = [...sts, { x: new Date(key), y: Number(value["4. close"]) }];
        }
        setStockTimeSeries(sts);
      });
  }, [id]);

  return (
    <div className="w-full min-w-[200px] max-w-[1050px]">
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
  );
}
