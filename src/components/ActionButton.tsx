import { ReactNode } from 'react';

import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/HoverCard';

type TopButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ITopButtonProps extends TopButtonProps {
  children: ReactNode;
  hoverMessage?: string;
}

export function ActionButton({ children, type, hoverMessage, ...props }: ITopButtonProps) {
  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger asChild>
        <button
          type={type}
          className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#F0F0F0] bg-white shadow-md/10 hover:cursor-pointer hover:shadow-lg dark:border-[#2B2B2B] dark:bg-[#353535]"
          {...props}
        >
          {children}
        </button>
      </HoverCardTrigger>
      {hoverMessage && <HoverCardContent className="w-fit bg-white p-2.5 text-sm dark:bg-[#353535]">{hoverMessage}</HoverCardContent>}
    </HoverCard>
  );
}
