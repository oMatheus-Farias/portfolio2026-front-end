import Image, { StaticImageData } from 'next/image';

interface ITechnologiesProps {
  name: string;
  image: StaticImageData;
}

export function Technologies({ name, image }: ITechnologiesProps) {
  return (
    <li className="relative aspect-square w-full">
      <Image src={image} alt={name} fill sizes="100%" className="rounded-3xl border border-[##dbdbdb] shadow-md dark:border-[#2B2B2B]" />
    </li>
  );
}
