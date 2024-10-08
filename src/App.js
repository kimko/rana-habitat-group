import React, { useEffect, useState } from 'react';
import SectionHero from './components/SectionHero';
import HomeHero from './components/HomeHero';
import ContactHero from './components/ContactHero';
import AboutHero from './components/AboutHero';
import CommingSoonHero from './components/CommingSoonHero';
import NavigationBar from './components/NavigationBar';
import './App.css';

const defaultTheme = process.env.REACT_APP_DEFAULT_THEME;

function App() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState('#home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);

    const params = new URLSearchParams(window.location.search);
    const showContent = params.get('showContent');

    if (showContent === 'true') {
      setIsContentVisible(true);
    }
  }, []);

  // Navigation links for the navbar
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavigationBar navLinks={navLinks} selectedSection={selectedSection} onSectionChange={handleSectionChange} />

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {!isContentVisible && (
          <div className="snap-start">
            <CommingSoonHero />
          </div>
        )}
        {isContentVisible && (
          <>
            <div className="snap-start" id="home">
              <HomeHero />
            </div>
            <div className="snap-start" id="about">
              <AboutHero />
            </div>
            <div className="snap-start" id="projects">
              <SectionHero title="Projects" path="/content/projects.csv" className="section" useTimeline />
            </div>
            <div className="snap-start" id="contact">
              <ContactHero />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
