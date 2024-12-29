import gql from "graphql-tag";
import { TypedDocumentNode } from "@apollo/react-hooks";
import { PokemonInfo } from "@/types/PokemonsTypes";
interface PokemonsinfoData {
  pokemon: PokemonInfo;
}

const GET_POKEMON: TypedDocumentNode<PokemonsinfoData> = gql`
  query pokemonSelect($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
      evolutionRequirements {
        amount
        name
      }
    }
  }
`;

export default GET_POKEMON;
