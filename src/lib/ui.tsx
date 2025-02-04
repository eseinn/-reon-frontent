import cn from 'classnames';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
export const Wrapper = ({ children }: PropsWithChildren) => (
  <div className='flex flex-col items-center justify-center my-4'>
    {children}
  </div>
);

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className='font-bold text-xl my-10 capitalize'>{children}</h1>
);
type StyledButtonProps = PropsWithChildren<
  { noColor?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export const StyledButton = ({
  children,
  noColor,
  ...props
}: StyledButtonProps) => (
  <button
    className={cn(
      'w-full text-center border p-2 font-bold transition-all rounded-md',
      noColor
        ? 'hover:bg-gray-400 bg-gray-100'
        : 'bg-blue-500 border-blue-600 text-white  hover:bg-blue-400'
    )}
    {...props}
  >
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
