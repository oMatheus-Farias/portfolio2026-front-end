import Image, { type StaticImageData } from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog';

interface IProjectsProps {
  name: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
}

export function Projects({ name, image, description, technologies }: IProjectsProps) {
  return (
    <li className="w-full">
      <Dialog>
        <DialogTrigger className="relative aspect-square w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="100%"
            className="rounded-3xl border border-[##dbdbdb] shadow-md transition-all duration-200 hover:cursor-pointer hover:opacity-90 hover:shadow-lg dark:border-[#2B2B2B]"
          />
        </DialogTrigger>
        <DialogContent className="rounded-2xl border-[4px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </li>
  );
}
