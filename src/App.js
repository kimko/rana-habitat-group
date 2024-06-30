import React, { useEffect } from 'react';
import Section from './components/Section';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import './App.css';

const navLinks = [
  // { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  // { href: '#scientific-research-and-restoration-experience', label: 'Experience' },
  // { href: '#leadership-experience', label: 'Leadership' },
  // { href: '#publications', label: 'Publications' },
  { href: '#trainings-certifications', label: 'Certifications' },
];

const defaultTheme = process.env.REACT_APP_DEFAULT_THEME;

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);
  return (
    <div className="App flex flex-col min-h-screen">
      <NavigationBar navLinks={navLinks} />
      <HeroSection />

      <main id="main-content" className="flex-grow container mx-auto pl-4 pr-4">
        {/* <Section title="Education" path="/content/education.csv" className="section" useTimeline /> */}
        <Section title="Projects" path="/content/projects.csv" className="section" useTimeline />
        {/* <Section
          title="Scientific Research and Restoration Experience"
          path="content/experience/index.md"
          className="section"
        />
        <Section title="Leadership Experience" path="/content/leadership.csv" className="section" useTimeline />
        <Section title="Publications" path="content/publications/index.md" className="section" /> */}
        <Section title="Trainings / Certifications" path="content/certifications/index.md" className="section" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
