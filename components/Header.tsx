import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '../data/portfolioData';
import { Icon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = '';
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = 'contact';
      } else if (!currentSection) {
        currentSection = 'home';
      }
      
      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="header__nav container">
        <a href="#home" className="header__logo" onClick={() => setIsOpen(false)}>
          GP
        </a>
        
        <div className="header__menu-desktop">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`header__link ${active === link.id ? 'active' : ''}`}
            >
              {link.title}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="header__menu-mobile-toggle">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="header__mobile-button">
            <Icon name={isOpen ? 'close' : 'menu'} size={28}/>
          </button>
        </div>
      </nav>

      <div className={`header__menu-mobile ${isOpen ? 'open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
              <a
                href={`#${link.id}`}
                key={link.id}
                onClick={() => setIsOpen(false)}
                className={`header__mobile-link ${active === link.id ? 'active' : ''}`}
              >
                {link.title}
              </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;