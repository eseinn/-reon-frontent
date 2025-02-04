'use client';
import { addFavorite } from '@/lib/data';
import { StyledButton } from '@/lib/ui';
import { useParams } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      {children}
      <div className='w-[120px] flex m-auto'>
        <StyledButton onClick={() => addFavorite(id as string)}>
          Add favorite
        </StyledButton>
      </div>
    </div>
  );
}
