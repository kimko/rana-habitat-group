import React from 'react';
import LoadingBar from './components/LoadingBar';
import Education from './components/Education';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import NavigationBar from './components/NavigationBar';
import logo from './logo.svg';
import { version } from './version';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-base-200 ">
      <NavigationBar />
      <div id="hero" className="hero min-h-screen bg-base-200 flex items-center justify-center pt-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src={logo}
              className="w-32 h-32 mx-auto animate-spin-slow"
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
        <section id="education" className="my-8">
          <Education />
        </section>
        <section id="experience" className="my-8">
          <Experience />
        </section>
        <section id="leadership" className="my-8">
          <Leadership />
        </section>
        <section id="publications" className="my-8">
          <Publications />
        </section>
        <section id="certifications" className="my-8">
          <Certifications />
        </section>
      </main>

      <footer className="bg-base-200 p-4 text-center">
        <p>Version: {version}</p>
      </footer>
    </div>
  );
}

export default App;
