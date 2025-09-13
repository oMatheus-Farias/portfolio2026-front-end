import fswStore from '@/assets/projects/fswStore.png';
import fswTrips from '@/assets/projects/fswTrips.png';
import goodyCosmeticsAdmin from '@/assets/projects/goodyCosmeticsAdmin.png';
import goodyCosmeticsEcommerce from '@/assets/projects/goodyCosmeticsEcommerce.png';
import reisFinance from '@/assets/projects/reisFinance.png';
import unibusiness from '@/assets/projects/unibusiness.png';

export const projects = [
  {
    name: 'Goody Cosméticos Admin',
    image: goodyCosmeticsAdmin,
    description: 'Sistema de gestão para ecommerce de cosméticos',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Fastify', 'PostgreSQL'],
  },
  {
    name: 'Goody Cosméticos Ecommerce',
    image: goodyCosmeticsEcommerce,
    description: 'Ecommerce de cosméticos',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Fastify', 'PostgreSQL'],
  },
  {
    name: 'Reis Finance',
    image: reisFinance,
    description: 'Plataforma de gestão financeira',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    name: 'FSW Trips',
    image: fswTrips,
    description: 'Plataforma de gestão de viagens',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    name: 'FSW Store',
    image: fswStore,
    description: 'Ecommerce de produtos variados',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    name: 'Unibusiness',
    image: unibusiness,
    description: 'Plataforma de gestão empresarial com integração com Power BI',
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Power BI',
      'Azure',
    ],
  },
];
