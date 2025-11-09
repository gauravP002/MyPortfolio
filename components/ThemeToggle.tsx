
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
