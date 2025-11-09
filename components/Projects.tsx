import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolioData';
import { FaGithub, FaLink } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsContent: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
      <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-12"></div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 p-3 bg-white/80 rounded-full text-indigo-600 hover:bg-white">
                    <FaLink size={24} />
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 p-3 bg-white/80 rounded-full text-indigo-600 hover:bg-white">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-cyan-400 text-xs font-semibold rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Projects = SectionWrapper(ProjectsContent, 'projects');
export default Projects;