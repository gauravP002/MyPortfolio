
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const AboutContent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <motion.div 
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-6"></div>
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          I'm a dedicated Frontend Engineer with a strong passion for creating elegant, high-performance web applications. With years of experience in the field, I have honed my skills in modern frameworks like React and Angular, allowing me to build dynamic and responsive user interfaces.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          My journey in tech began with a curiosity for how things work on the web, which quickly evolved into a career. I thrive on solving complex problems and am committed to writing clean, maintainable, and scalable code. I believe in the power of good design and its ability to enhance user experience.
        </p>
      </motion.div>
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-bold mb-6 text-center">My Tech Stack</h3>
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <skill.icon size={40} style={{ color: skill.color }} />
              <p className="mt-2 text-sm font-medium text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const About = SectionWrapper(AboutContent, 'about');
export default About;
