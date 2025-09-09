import { ReactNode } from 'react';

type TopButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ITopButtonProps extends TopButtonProps {
  children: ReactNode;
}

export function ActionButton({ children, type, ...props }: ITopButtonProps) {
  return (
    <button
      type={type}
      className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#F0F0F0] bg-white shadow-md/10 hover:cursor-pointer hover:shadow-lg dark:border-[#2B2B2B] dark:bg-[#353535]"
      {...props}
    >
      {children}
    </button>
  );
}
