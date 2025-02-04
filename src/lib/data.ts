import type { PokemonListT, PokemonT } from "@/lib/types";

const API_URL = "https://pokeapi.co/api/v2/"

export const fetchPokemons = (limit: number): Promise<PokemonListT> =>
    fetch(`${API_URL}pokemon?limit=${limit}&offset=0`).then(res => res.json());

export const fetchPokemon = (name: string): Promise<PokemonT> =>
    fetch(`${API_URL}pokemon/${name}`).then(res => res.json());

export const getFavorites = () => {
    let match = document.cookie.match(/(?:^|;\s*)favorites=([^;]*)/);
    return match ? JSON.parse(decodeURIComponent(match[1])) : [];
}

export const addFavorite = (name: string) => {
    console.log(name)
    let favorites = getFavorites();
    if (!favorites.includes(name)) {
        favorites.push(name);
        document.cookie = `favorites=${JSON.stringify(favorites)}; path=/; max-age=31536000`;
    }
}
export const removeFavorite = (name: string) => {
    let favorites = getFavorites().filter(fav => fav !== name);
    document.cookie = `favorites=${JSON.stringify(favorites)}; path=/; max-age=31536000`;
}