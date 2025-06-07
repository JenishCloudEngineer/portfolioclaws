import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      
      {/* 🔳 Background Image (Behind All) */}
      <img
        src="me.png" // make sure this is inside your `public/` folder
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-10 z-[-1]"
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;