import type { PokemonListT, PokemonT } from "@/lib/types";

const API_URL = "https://pokeapi.co/api/v2/"

export const fetchPokemons = (limit: number): Promise<PokemonListT> =>
    fetch(`${API_URL}pokemon?limit=${limit}&offset=0`).then(res => res.json());

export const fetchPokemon = (name: string): Promise<PokemonT> =>
    fetch(`${API_URL}pokemon/${name}`).then(res => res.json());