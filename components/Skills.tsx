
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolioData';

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

const SkillsContent: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Skills</h2>
      <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-12"></div>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <skill.icon size={50} style={{ color: skill.color }} className="transition-transform duration-300 group-hover:scale-110"/>
              <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = SectionWrapper(SkillsContent, 'skills');
export default Skills;
