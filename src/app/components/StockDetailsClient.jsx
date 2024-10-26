"use client";

import StockDetails from "./StockDetails";

export default function StockDetailsClient({ stockQuote, stockOverview }) {
  return <StockDetails stockQuote={stockQuote} stockOverview={stockOverview} />;
}
