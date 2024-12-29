import { useQuery } from "@apollo/client";
import GET_ALL_POKEMON from "@/graphql/getAllPokemon";
import { ChangeEvent, useRef, useState } from "react";
import { PokemonIdName } from "@/types/PokemonsTypes";

export function useSearch() {
  const pokemons = useRef([] as PokemonIdName[]);
  const { loading, data } = useQuery(GET_ALL_POKEMON);
  const [searchSuggest, setSearchSuggest] = useState([] as PokemonIdName[]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [notFound, setNotfound] = useState(false);

  if (data) pokemons.current = data.pokemons;

  const search = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    const searchResult = pokemons.current.filter((pokemon) =>
      pokemon.name.includes(searchValue)
    );
    const found = searchResult.length > 0;
    const showSuggestionCondition = searchValue.length > 0 && found;
    setNotfound(!found);
    setShowSuggestion(showSuggestionCondition);
    const firstFiveResult = searchResult.slice(0, 5);
    setSearchSuggest(firstFiveResult);
  };

  return { loading, search, searchSuggest, showSuggestion, notFound };
}

export default useSearch;
