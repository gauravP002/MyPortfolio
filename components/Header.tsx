import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '../data/portfolioData';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
          GP
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`relative font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors ${active === link.id ? 'text-indigo-600 dark:text-cyan-400' : ''}`}
            >
              {link.title}
              {active === link.id && (
                <motion.span 
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 block h-0.5 w-full bg-indigo-500 dark:bg-cyan-400"
                />
              )}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <HiX size={28}/> : <HiMenu size={28}/>}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <motion.ul 
              className="flex flex-col items-center py-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={itemVariants} className="py-2">
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      setActive(link.id);
                    }}
                    className={`text-lg font-medium transition-colors ${active === link.id ? 'text-indigo-600 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300'}`}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;