import Image, { StaticImageData } from 'next/image';

interface IProjectsProps {
  name: string;
  image: StaticImageData;
}

export function Projects({ name, image }: IProjectsProps) {
  return (
    <li className="relative aspect-square w-full">
      <Image
        src={image}
        alt={name}
        fill
        sizes="100%"
        className="rounded-3xl border border-[##dbdbdb] shadow-md transition-all duration-200 hover:cursor-pointer hover:opacity-90 hover:shadow-lg dark:border-[#2B2B2B]"
      />
    </li>
  );
}
