import React from 'react';
import { socialLinks } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 mt-16">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} Gaurav Pandey | Built with ❤️ using React & Tailwind
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;