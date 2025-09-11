import Image from 'next/image';
import { type StaticImageData } from 'next/image';

export enum SocialCardsTitle {
  LINKEDIN = 'LinkdIn',
  GITHUB = 'GitHub',
  GMAIL = 'Gmail',
  YOUTUBE = 'YouTube',
}

interface ISocialCardsProps {
  title: SocialCardsTitle;
  subTitle: string;
  image: StaticImageData;
  socialUrl: string;
}

export function SocialCards({ title, subTitle, image, socialUrl }: ISocialCardsProps) {
  return (
    <a className="relative col-span-1 row-span-1" href={socialUrl} target="_blank" rel="noopener noreferrer">
      <div
        className={`flex flex-col gap-2 rounded-3xl border border-[#DBDBDB] p-5 shadow-md/5 ${title === SocialCardsTitle.GITHUB ? 'bg-[#FFFFFF]' : title === SocialCardsTitle.GMAIL ? 'bg-[#FFF4F3]' : title === SocialCardsTitle.YOUTUBE ? 'bg-[#FFF5F5]' : 'bg-[#F0F6F9]'} transition-all duration-200 hover:cursor-pointer hover:opacity-90 hover:shadow-lg dark:border-[#2B2B2B]`}
      >
        <Image src={image} alt={title} width={30} />
        <div className="flex flex-col">
          <p className="text-[#252525]">{title}</p>
          <p className="text-[15px] text-[#9A9A9A] md:hidden xl:block dark:text-[#504e4e]">{subTitle}</p>
        </div>
      </div>
    </a>
  );
}
