import React, { useEffect } from 'react';
import Section from './components/Section';
import MoreHero from './components/MoreHero';
import ContactHero from './components/ContactHero';
import LauraHero from './components/LauraHero';
import './App.css';
// import NavigationBar from './components/NavigationBar';

const defaultTheme = process.env.REACT_APP_DEFAULT_THEME;

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);
  return (
    <div className="App">
      {/* <NavigationBar
        navLinks={[
          { href: '#hero', label: 'Home' },
          { href: '#projects', label: 'Projects' },
          { href: '#contact', label: 'Contact' },
        ]}
      /> */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="snap-start">
          <ContactHero />
        </div>

        <div className="snap-start">
          <MoreHero />
        </div>
        <div className="snap-start">
          <LauraHero />
        </div>
        <div className="snap-start">
          <Section title="Projects" path="/content/projects.csv" className="section" useTimeline />
        </div>
        {/* <div className="snap-start">
        <Section title="Trainings / Certifications" path="content/certifications/index.md" className="section" />
      </div> */}
      </div>
    </div>
  );
}

export default App;
