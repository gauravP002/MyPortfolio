import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = <P extends object,>(
  Component: React.ComponentType<P>,
  idName: string
): React.FC<P> => {
  return (props: P) => (
    <motion.section
      id={idName}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container mx-auto px-6 py-16 md:py-20"
    >
      <Component {...props} />
    </motion.section>
  );
};

export default SectionWrapper;