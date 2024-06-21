import React from 'react';
import LoadingBar from './components/LoadingBar';
import Section from './components/Section';
import NavigationBar from './components/NavigationBar';
import logo from './logo.svg';
import { version } from './version';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col min-h-screen" data-theme="garden">
      <NavigationBar />
      <div id="hero" className="hero min-h-screen flex items-center justify-center pt-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src={logo}
              className="w-32 h-32 mx-auto"
              alt="Logo frog"
              title="Made by SVG Repo: https://www.svgrepo.com/svg/152726/frog"
            />
            <h1 className="text-5xl font-bold mt-4">Rana Habitat LLC</h1>
            <p className="py-6 text-xl">Coming Soon</p>
            <LoadingBar />
            <a href="#main-content" className="mt-8 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <main id="main-content" className="flex-grow container mx-auto p-8">
        <Section title="Education" path="content/education/index.md" />
        <Section title="Scientific Research and Restoration Experience" path="content/experience/index.md" />
        <Section title="Leadership Experience" path="content/leadership/index.md" />
        <Section title="Publications" path="content/publications/index.md" />
        <Section title="Trainings / Certifications" path="content/certifications/index.md" />
      </main>

      <footer className="p-4 text-center">
        <p>Version: {version}</p>
      </footer>
    </div>
  );
}

export default App;
