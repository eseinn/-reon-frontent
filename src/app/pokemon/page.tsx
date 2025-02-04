import { fetchPokemons } from '@/lib/data';
import { Button } from '@/lib/ui';
import Link from 'next/link';

const Page = async () => {
  const pokemons = await fetchPokemons(10);
  console.log(pokemons);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-xl my-10'>Pokemons</h1>
      <div className='flex flex-col gap-4'>
        {pokemons.results.map((pokemon) => {
          return (
            <Button key={`${pokemon.url}`}>
              <Link href={`pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
