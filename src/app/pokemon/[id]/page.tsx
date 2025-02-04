import { fetchPokemon } from '@/lib/data';
import { AttributeItem, H1, Wrapper } from '@/lib/ui';

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const pokemon = await fetchPokemon(id);

  return (
    <Wrapper>
      <H1>Pokemon details</H1>
      <div className='my-4'>
        You have chosen: <span className=' font-semibold capitalize'>{id}</span>
      </div>
      <div className='flex flex-col justify-between'>
        <AttributeItem keyValue='name' value={pokemon.name} />
        <AttributeItem keyValue='height' value={pokemon.height} />
        <AttributeItem
          keyValue='base experience'
          value={pokemon.base_experience}
        />
      </div>
    </Wrapper>
  );
};
export default Page;
