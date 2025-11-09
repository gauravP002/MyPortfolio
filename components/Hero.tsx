import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const titles = ["Frontend Engineer", "Web Developer", "UI Specialist"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      setText(titles[index].substring(0, subIndex));
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex, index, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10"></div>
        <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10"
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
            }}
            style={{
                backgroundImage: `radial-gradient(circle at center, rgba(128, 90, 213, 0.2) 0%, transparent 40%),
                                 radial-gradient(circle at top left, rgba(74, 222, 128, 0.2) 0%, transparent 40%),
                                 radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.2) 0%, transparent 40%)`,
                backgroundSize: '200% 200%'
            }}
        />

      <div className="container mx-auto px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://picsum.photos/seed/gaurav/200"
            alt="Gaurav Pandey"
            className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">
            Hi, I'm Gaurav Pandey
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 mb-4 h-12">
            {text}<span className="animate-ping">|</span>
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
            I'm a passionate Frontend Software Engineer dedicated to building scalable and beautiful web applications using React, Angular, and modern UI frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white dark:bg-slate-800 text-indigo-500 dark:text-cyan-400 font-semibold rounded-full shadow-lg border border-transparent dark:border-slate-700"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;