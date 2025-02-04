import type { PokemonListT } from "@/lib/types";

const API_URL = "https://pokeapi.co/api/v2/"

export const fetchPokemons = (limit: number): Promise<PokemonListT> =>
    fetch(`${API_URL}pokemon?limit=${limit}&offset=0`).then(res => res.json());