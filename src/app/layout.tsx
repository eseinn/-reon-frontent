import { ReactQueryProvider } from '@/lib/providers';
import type { Metadata } from 'next';
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
        <ReactQueryProvider>{children} </ReactQueryProvider>
      </body>
    </html>
  );
}
