import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section 
      id={id}
      ref={ref}
      className={`section-container animated-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;