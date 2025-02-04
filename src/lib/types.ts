export type PokemonListT = {
    count: number
    results: Array<{
        name: string;
        url: string;
    }
    >
};

export type PokemonT = {
    height: number;
    base_experience: number
    name: string;
    abilities: Array<{ ability: { name: string, url: string }, is_hidden: boolean, slot: number }>
}