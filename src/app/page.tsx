'use client';

import eua2025 from '@/assets/about/eua2025.png';
import love from '@/assets/about/love.png';
import rome from '@/assets/about/rome.png';
import { MePicture } from '@/components/MePicture';
import { Posts } from '@/components/Posts';
import { Projects } from '@/components/Projects';
import { SecondTitle } from '@/components/SecondTitle';
import { SocialCards, SocialCardsTitle } from '@/components/SocialCards';
import { Technologies } from '@/components/Technologies';
import { TopButton } from '@/components/TopButton';
import { Button } from '@/components/ui/Button';
import { posts } from '@/constants/posts';
import { projects } from '@/constants/projects';
import { technologies } from '@/constants/technologies';
import { CircleArrowUp } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import moonIcon from '../assets/moonIcon.png';
import githubIcon from '../assets/social/gitHubIcon.png';
import gmailIcon from '../assets/social/gmailIcon.png';
import instagramSocial from '../assets/social/instagramSocial.png';
import linkedinIcon from '../assets/social/linkedInIcon.png';
import youtubeIcon from '../assets/social/youtubeIcon.png';
import usIcon from '../assets/usIcon.png';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto min-h-screen w-full max-w-[510px] p-6 lg:max-w-[1500px] lg:px-16 lg:py-10 2xl:px-28">
      <main className="flex h-full w-full flex-col gap-24 lg:flex-row lg:justify-between">
        <section className="flex h-full flex-col lg:fixed">
          <div
            style={{
              maxHeight: 'calc(100vh - 120px)',
            }}
            className="lg:flex-1"
          >
            <div className="flex items-start gap-6">
              <MePicture />

              <div className="flex items-center justify-center gap-4">
                <TopButton type="button" aria-label="Trocar tema">
                  <div className="relative h-4 w-4">
                    <Image src={moonIcon} sizes="16px" alt="Trocar tema" fill />
                  </div>
                </TopButton>

                <TopButton type="button" aria-label="Trocar idioma">
                  <div className="relative h-5 w-5">
                    <Image src={usIcon} sizes="20px" alt="Trocar idioma" fill />
                  </div>
                </TopButton>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 lg:mt-8">
              <h1 className="text-4xl font-bold lg:text-[40px]">Matheus Neves</h1>

              <p className="max-w-[440px] text-base text-[#636363] lg:text-[18px] xl:text-[20px]">
                👨🏻‍💻 Desenvolvedor full stack, totalmente apaixonado por programação e tecnologia. Ferramentas que mais utilizo são TypeScript, React,
                Node.js e muito mais!
              </p>
            </div>
          </div>

          <Button
            style={{
              background: 'var(--button-gradient)',
            }}
            className="hidden w-fit lg:block"
          >
            📄 Baixar currículo
          </Button>
        </section>

        <section className="-mt-12 flex w-full max-w-[750px] flex-col lg:mt-0 lg:ml-auto lg:max-w-[550px] xl:max-w-[600px]">
          <div>
            <SecondTitle text="Principais tecnologias que utilizo" />
          </div>

          <ul className="mt-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
            {technologies.map((tech) => (
              <Technologies key={tech.name} name={tech.name} image={tech.image} />
            ))}
          </ul>

          <div className="mt-20">
            <SecondTitle text="Projetos, principais criados por mim" />
          </div>

          <ul className="mt-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <Projects key={project.name} name={project.name} image={project.image} />
            ))}
          </ul>

          <div className="mt-20">
            <SecondTitle text="Posts, contribuição com a comunidade" />
          </div>

          <ul className="mt-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
            {posts.map((posts) => (
              <Posts key={posts.name} name={posts.name} image={posts.image} />
            ))}
          </ul>

          <div className="mt-20">
            <SecondTitle text="Um pouco de mim" />
          </div>

          <ul className="mt-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
            <li className="flex h-[300px] items-center lg:h-full">
              <div className="grid min-h-full w-full grid-cols-2 grid-rows-2 gap-8">
                <div className="relative col-span-1 row-span-2">
                  <Image
                    src={eua2025}
                    alt="#EUA 2025"
                    fill
                    sizes="100%"
                    className="rounded-3xl border border-[##dbdbdb] object-cover shadow-md dark:border-[#2B2B2B]"
                  />
                </div>
                <div className="relative col-span-1 row-span-1">
                  <Image
                    src={rome}
                    alt="Roma"
                    fill
                    sizes="100%"
                    className="rounded-3xl border border-[##dbdbdb] object-cover shadow-md lg:object-contain dark:border-[#2B2B2B]"
                  />
                </div>
                <div className="relative col-span-1 row-span-1">
                  <Image
                    src={love}
                    alt="Casamento"
                    fill
                    sizes="100%"
                    className="rounded-3xl border border-[##dbdbdb] object-cover shadow-md lg:object-contain dark:border-[#2B2B2B]"
                  />
                </div>
              </div>
            </li>

            <li className="relative aspect-square w-full">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full rounded-3xl border border-[##dbdbdb] object-cover shadow-md dark:border-[#2B2B2B]"
                style={{
                  filter: 'brightness(0.8)',
                  imageRendering: 'auto',
                }}
              >
                <source src="/videos/html-class.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>
          </ul>

          <div className="mt-20">
            <SecondTitle text="Social" />
          </div>

          <ul className="mt-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
            <li className="relative aspect-square w-full">
              <Image
                src={instagramSocial}
                alt="Instagram Social"
                fill
                sizes="100%"
                className="rounded-3xl border border-[##dbdbdb] shadow-md transition-all duration-200 hover:cursor-pointer hover:opacity-90 hover:shadow-lg dark:border-[#2B2B2B]"
              />
            </li>

            <li className="grid grid-cols-2 grid-rows-2 gap-8">
              <SocialCards title={SocialCardsTitle.LINKEDIN} subTitle="linkedin.com" image={linkedinIcon} />
              <SocialCards title={SocialCardsTitle.GITHUB} subTitle="github.com" image={githubIcon} />
              <SocialCards title={SocialCardsTitle.GMAIL} subTitle="mail.com" image={gmailIcon} />
              <SocialCards title={SocialCardsTitle.YOUTUBE} subTitle="youtube.com" image={youtubeIcon} />
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-14 flex w-full flex-col-reverse items-center justify-center gap-4 sm:flex-row lg:mt-28 lg:ml-auto lg:justify-end lg:gap-8">
        <p className="text-sm text-[#848484] lg:text-base">© {currentYear} - Matheus Neves</p>
        <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#848484] transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 hover:text-[#252525] hover:shadow-md/5 lg:rounded-lg lg:text-base">
          <CircleArrowUp className="h-4 w-4" />
          Voltar ao topo
        </button>
      </footer>
    </div>
  );
}
