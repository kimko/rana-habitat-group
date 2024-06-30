import React, { useEffect } from 'react';
import Section from './components/Section';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import './App.css';

const defaultTheme = process.env.REACT_APP_DEFAULT_THEME;

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);
  return (
    <div className="App flex flex-col min-h-screen">
      <NavigationBar />
      <HeroSection />

      <main id="main-content" className="flex-grow container mx-auto p-0">
        <Section title="Education" path="/content/education.csv" className="section" useTimeline />
        <Section
          title="Scientific Research and Restoration Experience"
          path="content/experience/index.md"
          className="section"
        />
        <Section title="Leadership Experience" path="/content/leadership.csv" className="section" useTimeline />
        <Section title="Publications" path="content/publications/index.md" className="section" />
        <Section title="Trainings / Certifications" path="content/certifications/index.md" className="section" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
