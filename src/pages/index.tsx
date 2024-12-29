import SearchBar from "@/components/searchBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto w-1/3 min-w-80">
        <img
          className="w-1/3 m-auto mb-5"
          src="/images/Poké_Ball_icon.svg"
          alt="pokeball image"
        />
        <SearchBar />
      </div>
    </div>
  );
}
