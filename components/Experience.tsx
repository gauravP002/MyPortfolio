import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { experiences } from '../data/portfolioData';

const ExperienceContent: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
      <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-12"></div>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-300 dark:bg-slate-700"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-10 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-1/2"></div>
            <div className="w-1/2 px-4 md:px-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-1 text-indigo-600 dark:text-cyan-400">{exp.role}</h3>
                <p className="font-semibold mb-2">{exp.company}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-left text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map(tech => (
                     <span key={tech} className="px-2 py-1 bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-cyan-400 text-xs font-semibold rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
             {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-indigo-500 dark:bg-cyan-400 rounded-full border-4 border-slate-50 dark:border-slate-900 shadow-sm"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Experience = SectionWrapper(ExperienceContent, 'experience');
export default Experience;