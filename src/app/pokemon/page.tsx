import { fetchPokemons } from '@/lib/data';
import { StyledButton, Wrapper } from '@/lib/ui';
import Link from 'next/link';

const Page = async () => {
  const pokemons = await fetchPokemons(20);
  return (
    <Wrapper>
      <h1 className='font-bold text-xl my-10'>Pokemons</h1>
      <div className='flex flex-col gap-4'>
        {pokemons.results.map((pokemon) => {
          return (
            <Link
              href={`pokemon/${pokemon.name}`}
              className='capitalize w-full'
              key={`${pokemon.url}`}
            >
              <StyledButton>{pokemon.name} </StyledButton>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Page;
