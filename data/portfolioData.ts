
import { Skill, Project, Experience, NavLink, SocialLink } from '../types';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular, FaGitAlt, FaLinkedin, FaGithub, FaTwitter 
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiJest, SiFramer } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Angular', icon: FaAngular, color: '#DD0031' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
];

export const projects: Project[] = [
  {
    title: 'Netflix Clone',
    description: 'A feature-rich clone of the Netflix streaming service, built with React and powered by the TMDB API for movie data. Includes user authentication and a dynamic UI.',
    image: 'https://picsum.photos/seed/netflix/400/300',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'TMDB API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Money Transfer App',
    description: 'A secure and intuitive web application for seamless money transfers. Developed with Angular, featuring real-time transaction updates and a robust backend integration.',
    image: 'https://picsum.photos/seed/money/400/300',
    tags: ['Angular', 'TypeScript', 'SCSS', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Admin Dashboard',
    description: 'A comprehensive admin dashboard for data visualization and management. Implemented with React and Chart.js to provide insightful analytics and interactive charts.',
    image: 'https://picsum.photos/seed/dashboard/400/300',
    tags: ['React', 'Chart.js', 'Material UI', 'Context API'],
    liveUrl: '#',
    githubUrl: '#',
  },
   {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with product listings, a shopping cart, and a checkout process. Built to be scalable and provide a smooth user experience.',
    image: 'https://picsum.photos/seed/ecommerce/400/300',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Western Union',
    period: 'Jan 2021 - Present',
    description: [
      'Developed and maintained scalable web applications using Angular and React, improving user engagement by 25%.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Implemented responsive UI components with Tailwind CSS, ensuring cross-browser compatibility.',
      'Wrote unit and integration tests using Jest and React Testing Library to ensure code quality.',
    ],
    technologies: ['Angular', 'React', 'TypeScript', 'Jest', 'Tailwind CSS', 'Jenkins'],
  },
  {
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: 'Jun 2019 - Dec 2020',
    description: [
      'Translated UI/UX design wireframes into high-quality code.',
      'Built reusable components and front-end libraries for future use.',
      'Optimized applications for maximum speed and scalability.',
      'Worked closely with backend developers to integrate APIs.',
    ],
    technologies: ['JavaScript', 'React', 'Redux', 'SCSS', 'Webpack'],
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/' },
  { name: 'Email', icon: MdEmail, url: 'mailto:gaurav.pandey@example.com' },
];
