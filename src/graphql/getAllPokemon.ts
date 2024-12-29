import gql from "graphql-tag";
import { TypedDocumentNode } from "@apollo/react-hooks";
import { PokemonIdName } from "@/types/PokemonsTypes";

interface PokemonsData {
  pokemons: PokemonIdName[];
}
const GET_ALL_POKEMON: TypedDocumentNode<PokemonsData> = gql`
  query getAllPokemon {
    pokemons(first: 100000) {
      id
      name
    }
  }
`;

export default GET_ALL_POKEMON;
