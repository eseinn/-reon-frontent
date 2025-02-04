import type { PropsWithChildren } from 'react';

export const Button = ({ children }: PropsWithChildren) => (
  <button className='border-blue-600 border p-2 hover:bg-blue-400 bg-blue-500 font-bold text-white transition-all rounded-md'>
    {children}
  </button>
);
