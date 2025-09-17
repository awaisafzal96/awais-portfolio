// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const sectionsRef = useRef([]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSections = sectionsRef.current;
    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Cycle between dark -> green -> grey
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('green');
    } else if (theme === 'green') {
      setTheme('grey');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white'
          : theme === 'green'
          ? 'bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-white'
          : 'bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 text-gray-900'
      }`}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 text-2xl"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>
      <main className="md:ml-64 p-4 transition-all duration-300">
        <Header ref={(el) => (sectionsRef.current[0] = el)} />
        <About ref={(el) => (sectionsRef.current[1] = el)} />
        <Skills ref={(el) => (sectionsRef.current[2] = el)} />
        <Projects ref={(el) => (sectionsRef.current[3] = el)} />
        <Education ref={(el) => (sectionsRef.current[4] = el)} />
        <Contact ref={(el) => (sectionsRef.current[5] = el)} />
      </main>
      <Footer toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};

export default App;
