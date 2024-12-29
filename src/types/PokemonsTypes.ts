export type PokemonIdName = {
  id: string;
  name: string;
};

export interface PokemonInfo {
  id: string;
  number?: string;
  name?: string;
  weight?: Weight;
  height?: Height;
  classification?: string;
  types?: string[];
  resistant?: string[];
  weaknesses?: string[];
  fleeRate?: number;
  maxCP?: number;
  maxHP?: number;
  image?: string;
  attacks?: Attacks;
  evolutions?: Evolutions[];
  evolutionRequirements?: EvolutionRequirements;
}

interface Weight {
  minimum?: string;
  maximum?: string;
}

interface Height {
  minimum?: string;
  maximum?: string;
}

interface Attacks {
  fast?: Fast[];
  special?: Special[];
}

interface Fast {
  name: string;
  type: string;
  damage: number;
}

interface Special {
  name: string;
  type: string;
  damage: number;
}
interface Evolutions {
  id: string;
  name: string;
  image: string;
}

export interface EvolutionRequirements {
  amount: number;
  name: string;
}
