import React from 'react';
import { socialLinks } from '../data/portfolioData';
import { Icon } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copyright">
          &copy; {currentYear} Gaurav Pandey | Built with ❤️ using React & CSS
        </p>
        <div className="footer__socials">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="footer__social-link"
            >
              <Icon name={link.icon} size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;