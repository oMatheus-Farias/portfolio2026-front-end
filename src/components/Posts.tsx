import Image, { type StaticImageData } from 'next/image';

interface IPostsProps {
  name: string;
  image: StaticImageData;
  postUrl: string;
}

export function Posts({ name, image, postUrl }: IPostsProps) {
  return (
    <li className="aspect-square w-full">
      <a href={postUrl} target="_blank" rel="noopener noreferrer" className="relative block h-full w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="100%"
          className="rounded-3xl border border-[##dbdbdb] shadow-md transition-all duration-200 hover:cursor-pointer hover:opacity-90 hover:shadow-lg dark:border-[#2B2B2B]"
        />
      </a>
    </li>
  );
}
