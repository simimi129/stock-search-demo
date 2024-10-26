import Search from "./components/Search";

export default function Home() {
  return (
    <div className="w-full min-w-[200px] max-w-[400px]">
      <h2>Search for a stock</h2>
      <Search />
    </div>
  );
}
