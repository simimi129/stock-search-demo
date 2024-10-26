import StockDetails from "./StockDetails";

export default async function StockDetailsServer({ id }) {
  const globalQuotesResponse = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${id}&apikey=EF5DSD29211PHUA8`
  );
  const globalQuotesData = await globalQuotesResponse.json();
  const stockQuote = globalQuotesData["Global Quote"];

  const overviewResponse = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${id}&apikey=EF5DSD29211PHUA8`
  );
  const stockOverview = await overviewResponse.json();

  return <StockDetails stockQuote={stockQuote} stockOverview={stockOverview} />;
}
