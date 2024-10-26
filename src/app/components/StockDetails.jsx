import FavouriteBtn from "./FavouriteBtn";

export default function StockDetails({ stockQuote, stockOverview }) {
  return (
    <div className="flex max-h-min w-full min-w-[200px] max-w-[400px] items-center justify-between rounded-md bg-gray-100 p-2">
      <div className="flex flex-col">
        <div className="font-bold">{stockOverview["Symbol"]}</div>
        <div className="text-gray-600">{stockOverview["Name"]}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm text-gray-600">Price</div>
        <div>{stockQuote["05. price"]}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm text-gray-600">Change</div>
        <div
          className={
            stockQuote["09. change"] > 0 ? "text-green-500" : "text-red-500"
          }
        >
          {stockQuote["09. change"]} ({stockQuote["10. change percent"]})
        </div>
      </div>

      <FavouriteBtn stockQuote={stockQuote} stockOverview={stockOverview} />
    </div>
  );
}
