import StockDetailsServer from "@/app/components/StockDetailsServer";
import StockChart from "@/app/components/StockChart";

export default function StockDetailsPage({ params }) {
  return (
    <div className="flex w-full flex-col items-center">
      <StockDetailsServer id={params.id} />
      <StockChart id={params.id} />
    </div>
  );
}
