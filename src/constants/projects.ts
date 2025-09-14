import fswStore from '@/assets/projects/fswStore.webp';
import fswTrips from '@/assets/projects/fswTrips.webp';
import goodyCosmeticsAdmin from '@/assets/projects/goodyCosmeticsAdmin.webp';
import goodyCosmeticsEcommerce from '@/assets/projects/goodyCosmeticsEcommerce.webp';
import reisFinance from '@/assets/projects/reisFinance.webp';
import unibusiness from '@/assets/projects/unibusiness.webp';

export const projects = [
  {
    name: 'Goody Cosméticos Admin',
    image: goodyCosmeticsAdmin,
    description: 'goodyCosmeticsAdminDescription',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Fastify', 'PostgreSQL'],
  },
  {
    name: 'Goody Cosméticos Ecommerce',
    image: goodyCosmeticsEcommerce,
    description: 'goodyCosmeticsEcommerceDescription',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Fastify', 'PostgreSQL'],
  },
  {
    name: 'Reis Finance',
    image: reisFinance,
    description: 'reisFinanceDescription',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    name: 'FSW Trips',
    image: fswTrips,
    description: 'fswTripsDescription',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    name: 'FSW Store',
    image: fswStore,
    description: 'fswStoreDescription',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    name: 'Unibusiness',
    image: unibusiness,
    description: 'unibusinessDescription',
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
