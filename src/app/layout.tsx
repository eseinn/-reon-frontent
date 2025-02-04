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
          <div className='m-4 absolute right-0'>
            <Link href='/'>
              <StyledButton>Home</StyledButton>
            </Link>
          </div>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
