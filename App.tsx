import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';
import Academics from './components/Academics';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Hero />
          <SectionWrapper id="about"><About /></SectionWrapper>
          <SectionWrapper id="skills"><Skills /></SectionWrapper>
          <SectionWrapper id="projects"><Projects /></SectionWrapper>
          <SectionWrapper id="experience"><Experience /></SectionWrapper>
          <SectionWrapper id="academics"><Academics /></SectionWrapper>
          <SectionWrapper id="contact"><Contact /></SectionWrapper>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;