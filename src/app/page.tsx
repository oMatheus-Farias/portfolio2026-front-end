import { MePicture } from '@/components/MePicture';
import { Posts } from '@/components/Posts';
import { Projects } from '@/components/Projects';
import { SecondTitle } from '@/components/SecondTitle';
import { Technologies } from '@/components/Technologies';
import { TopButton } from '@/components/TopButton';
import { Button } from '@/components/ui/Button';
import { posts } from '@/constants/posts';
import { projects } from '@/constants/projects';
import { technologies } from '@/constants/technologies';
import Image from 'next/image';
import moonIcon from '../assets/moonIcon.png';
import usIcon from '../assets/usIcon.png';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[510px] flex-col gap-24 p-6 lg:max-w-[1500px] lg:flex-row lg:justify-between lg:px-16 lg:py-10 2xl:px-28">
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
      </section>
    </main>
  );
}
