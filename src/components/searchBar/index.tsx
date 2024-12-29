import useSearch from "@/hooks/useSearch";
import Loader from "../loader/loader";
import Link from "next/link";
export default function SearchBar() {
  const { loading, search, searchSuggest, showSuggestion, notFound } =
    useSearch();
  if (loading) return <Loader />;
  return (
    <div>
      <div className="relative">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search your Pokémon"
          onChange={search}
        />
      </div>
      {showSuggestion ? (
        <div className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow  my-2">
          {searchSuggest.map((suggestion) => (
            <Link href={"/pokemon/" + suggestion.name} key={suggestion.id}>
              <div className="flex w-full justify-start cursor-pointer hover:text-red-800">
                <div className="flex-grow font-medium">{suggestion.name}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <>{notFound && <p className="py-5">Not Found</p>}</>
      )}
    </div>
  );
}
