import Link from "next/link";

export default function SearchRecommendations({
  searchValue,
  recommendations,
  isRecommendationsOpen,
}) {
  return (
    <>
      {isRecommendationsOpen && searchValue && recommendations && (
        <div className="mt-1 rounded bg-gray-100 p-1">
          {recommendations?.map((recommendation) => (
            <Link
              href={`/details/${recommendation["1. symbol"]}`}
              key={recommendation["1. symbol"]}
              className="gap-30 flex cursor-pointer justify-between rounded p-1 hover:bg-gray-300"
            >
              <span className="font-bold">{recommendation["1. symbol"]}</span>
              <span className="truncate">{recommendation["2. name"]}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
