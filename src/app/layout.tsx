import { ReactQueryProvider } from '@/lib/providers';
import { StyledButton } from '@/lib/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokemon app',
  description: 'App that displays pokemons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <ReactQueryProvider>
          <div className='m-4 absolute flex gap-2 right-0'>
            <Link href='/'>
              <StyledButton noColor>Home</StyledButton>
            </Link>
            <Link href='/favorites'>
              <StyledButton noColor>Favorites</StyledButton>
            </Link>
          </div>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
