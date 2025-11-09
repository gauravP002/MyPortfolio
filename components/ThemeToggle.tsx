import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Icon } from './icons';

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Icon name="moon" size={20} /> : <Icon name="sun" size={20} />}
    </button>
  );
};

export default ThemeToggle;