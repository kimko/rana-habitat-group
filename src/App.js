import React, { useEffect } from 'react';
import Section from './components/Section';
import MoreHero from './components/MoreHero';
import ContactHero from './components/ContactHero';
import './App.css';

const defaultTheme = process.env.REACT_APP_DEFAULT_THEME;

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* <div className="snap-start">
      <Hero
          title="Welcome to Our Site"
          subtitle="Discover more about us"
          bgColor="bg-blue-500"
          textColor="text-white"
        />
      </div> */}
      <div className="snap-start">
        <ContactHero />
      </div>

      <div className="snap-start">
        <MoreHero />
      </div>
      <div className="snap-start">
        <Section title="Projects" path="/content/projects.csv" className="section" useTimeline />
      </div>
      {/* <div className="snap-start">
        <Section title="Trainings / Certifications" path="content/certifications/index.md" className="section" />
      </div> */}
    </div>
  );
}

export default App;
