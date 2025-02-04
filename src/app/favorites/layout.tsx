'use client';
import { getFavorites } from '@/lib/data';
import { StyledButton } from '@/lib/ui';
import Link from 'next/link';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const favorites = getFavorites();
  return (
    <div className='flex flex-col gap-4'>
      {children}
      <div className='w-[120px] flex flex-col gap-4 m-auto'>
        {favorites.map((name, index) => (
          <Link
            href={`pokemon/${name}`}
            className='capitalize w-full'
            key={index}
          >
            <StyledButton>{name} </StyledButton>
          </Link>
        ))}{' '}
      </div>
    </div>
  );
}
