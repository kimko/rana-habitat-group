import React, { useEffect, useState } from 'react';
import Section from './components/Section';
import MoreHero from './components/MoreHero';
import ContactHero from './components/ContactHero';
import LauraHero from './components/LauraHero';
import CommingSoonHero from './components/CommingSoonHero';
import './App.css';

const defaultTheme = process.env.REACT_APP_DEFAULT_THEME;

function App() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);

    const params = new URLSearchParams(window.location.search);
    const showContent = params.get('showContent');

    if (showContent) {
      setIsContentVisible(true);
    }
  }, []);

  return (
    <div className="App">
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {!isContentVisible && (
          <div className="snap-start">
            <CommingSoonHero />
          </div>
        )}
        {isContentVisible && (
          <>
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
            <div className="snap-start">
              <Section title="Trainings / Certifications" path="content/certifications/index.md" className="section" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
