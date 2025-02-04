import { fetchPokemons } from '@/lib/data';
import { H1, StyledButton, Wrapper } from '@/lib/ui';
import Link from 'next/link';

const Page = async () => {
  const pokemons = await fetchPokemons(20);
  return (
    <Wrapper>
      <H1>Pokemons</H1>
      <div className='flex flex-col gap-4'>
        {pokemons.results.map((pokemon, index) => (
          <Link
            href={`pokemon/${pokemon.name}`}
            className='capitalize w-full'
            key={index}
          >
            <StyledButton>{pokemon.name} </StyledButton>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};
export default Page;
