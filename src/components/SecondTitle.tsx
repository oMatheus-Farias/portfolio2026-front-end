import { ArrowDownRight } from 'lucide-react';

interface ISecondTitleProps {
  text: string;
}

export function SecondTitle({ text }: ISecondTitleProps) {
  return (
    <div className="flex items-center gap-2">
      <ArrowDownRight size={16} strokeWidth={3} />
      <h2 className="text-base font-semibold lg:text-[18px]">{text}</h2>
    </div>
  );
}
