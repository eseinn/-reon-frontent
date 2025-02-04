import type { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => (
  <div className='flex flex-col items-center justify-center my-4'>
    {children}
  </div>
);
export const StyledButton = ({ children }: PropsWithChildren) => (
  <button className='w-full border-blue-600 text-center border p-2 hover:bg-blue-400 bg-blue-500 font-bold text-white transition-all rounded-md'>
    {children}
  </button>
);
export const AttributeItem = ({
  keyValue,
  value,
}: {
  keyValue: string;
  value: string | number;
}) => (
  <div className='flex justify-between gap-4 my-2 w-full'>
    <div className='capitalize font-semibold'>{keyValue}:</div>
    <div>{value}</div>
  </div>
);
