import React, { useState, useEffect } from 'react';

const titles = ["Frontend Engineer", "Web Developer", "UI Specialist"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !isDeleting) {
      const timer = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      const nextSubIndex = subIndex + (isDeleting ? -1 : 1);
      setText(titles[index].substring(0, nextSubIndex));
      setSubIndex(nextSubIndex);
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="home" className="hero">
      <div className="hero__background-overlay"></div>
      
      <div className="container hero__content">
        <div className="hero__intro">
          <img
            src="/profile-photo.jpg"
            alt="Gaurav Pandey"
            className="hero__image"
          />
          <h1 className="hero__title">
            Hi, I'm Gaurav Pandey
          </h1>
          <h2 className="hero__subtitle">
            {text}<span className="hero__cursor">|</span>
          </h2>
          <p className="hero__description">
            I'm a passionate Frontend Software Engineer dedicated to building scalable and beautiful web applications using React, Angular, and modern UI frameworks.
          </p>
          <div className="hero__actions">
            <a href="/resume.pdf" download className="button button--primary">
              Download Resume
            </a>
            <a href="#contact" className="button button--secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;