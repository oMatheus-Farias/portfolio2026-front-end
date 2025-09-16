import Image, { type StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

import { Badge } from './ui/Badge';
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
  const t = useTranslations('Projects');

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
        <DialogContent className="h-[90%] max-h-[700px] overflow-hidden overflow-y-scroll rounded-[32px] border-[4px] px-0 pt-0 md:overflow-y-hidden">
          <div
            style={{
              backgroundImage: `
              linear-gradient(to bottom, transparent 40%, var(--background) 100%),
              linear-gradient(to bottom, transparent 60%, var(--background) 100%),
              linear-gradient(to bottom, transparent 80%, var(--background) 100%),
              linear-gradient(to bottom, transparent 90%, var(--background) 100%),
              linear-gradient(to bottom, transparent 90%, var(--background) 100%),
              linear-gradient(to bottom, transparent 90%, var(--background) 100%),
              linear-gradient(to bottom, transparent 90%, var(--background) 100%),
              url(${image.src})
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="h-[250px] w-full"
          ></div>

          <div className="-mt-24 px-12">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">{name}</DialogTitle>
              <DialogDescription className="sr-only">{description}</DialogDescription>
            </DialogHeader>

            <div className="mt-6 h-full overflow-hidden rounded-2xl">
              <div className="border-b border-[#E9E9E9] bg-[#F9F9F9] p-6 dark:border-[#323232] dark:bg-[#232323]">
                <h3 className="text-center text-[18px] font-semibold lg:text-left">
                  {t('projectDetailsTitle')}
                </h3>
              </div>

              <div className="mt-8 flex w-full flex-col gap-4 px-2 md:px-6">
                <h4 className="text-base font-medium">{t('descriptionTitle')}</h4>
                <p className="text-sm text-[#636363] dark:text-[#D5D5D5]">{description}</p>
              </div>

              <div className="mt-8 flex w-full flex-col gap-4 px-2 md:px-6">
                <h4 className="text-base font-medium">{t('technologiesUsed')}</h4>
                <div className="flex flex-wrap items-center gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </li>
  );
}
