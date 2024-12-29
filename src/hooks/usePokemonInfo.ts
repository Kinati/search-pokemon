import { useRouter } from "next/router";
import GET_POKEMON from "@/graphql/getPokemon";
import { useQuery } from "@apollo/client";
import { PokemonInfo } from "@/types/PokemonsTypes";

export function usePokemonInfo() {
  const router = useRouter();
  const name = router.query.name;
  const { loading, data } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  const pokemon = data?.pokemon ? data.pokemon : ({} as PokemonInfo);
  return { loading, pokemon };
}

export default usePokemonInfo;
