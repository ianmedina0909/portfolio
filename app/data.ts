type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Inhhair',
    description: 'Beauty product / ecommerce',
    link: 'https://inhhair.com/',
    video:
      'inh.webm',
    id: 'project1',
  },
  {
    name: 'Glamnetics',
    description: 'Beauty product / ecommerce',
    link: 'glamnetic.webm',
    video:
      'glamnetic.webm',
    id: 'project2',
  },
{
    name: 'Remyricos',
    description: 'Hair Cut, hair solution product, services / ecommerce',
    link: 'https://www.remyricos.com/',
    video:
      'remy.webm',
    id: 'project3',
  },
{
    name: 'Prosperna',
    description: 'Creating website and dashboard for client',
    link: 'https://prosperna.com/',
    video:
      'prosperna.webm',
    id: 'project3',
  },
{
    name: 'Hubble',
    description: 'House building constraction and AI',
    link: 'https://www.hubble.sh/',
    video:
      'hubble.webm',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Pru Life UK',
    title: 'Full-stack Developer',
    start: '2022',
    end: 'Present',
    link: 'https://www.prulifeuk.com.ph/en/',
    id: 'work1',
  },
  {
    company: 'Kombo Ventures',
    title: 'Frontend Developer',
    start: '2022',
    end: '2022',
    link: 'https://www.komboventures.com/',
    id: 'work2',
  },
  {
    company: 'Accenture',
    title: 'Programmer/Analyst',
    start: '2021',
    end: '2021',
    link: 'https://ibelick.com',
    id: 'work3',
  },
{
    company: 'Genepea',
    title: 'Freelance/Software Developer',
    start: '2021',
    end: '2021',
    link: 'https://www.facebook.com/genepeaofficial/',
    id: 'work4',
  },
{
    company: 'SUHO',
    title: 'Software Developer',
    start: '2018',
    end: '2020',
    link: 'https://www.suho.com.au/',
    id: 'work5',
  },
{
    company: 'Xtendly',
    title: 'Jr. Frontend Developer',
    start: '2017',
    end: '2018',
    link: 'https://www.suho.com.au/',
    id: 'work5',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'How to be Software Developer 2024',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/how-to-be-software-developer',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ianmedina0909',
  },
  {
    label: 'Twitter',
    link: '',
  },
  {
    label: 'LinkedIn',
    link: 'www.linkedin.com/in/ian-medina-6aa1461a4',
  },
  {
    label: 'Instagram',
    link: '',
  },
]

export const EMAIL = 'ianmedina0909@gmail.com'
