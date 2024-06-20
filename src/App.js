import React from 'react';
import LoadingBar from './components/LoadingBar';
import Education from './components/Education';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import NavigationBar from './components/NavigationBar';
import logo from './logo.svg';
import './App.css';
import { version } from './version';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NavigationBar />
      <header className="bg-base-100 p-4 flex flex-col items-center">
        <img
          src={logo}
          className="w-32 h-32"
          alt="Logo frog"
          title="Made by SVG Repo: https://www.svgrepo.com/svg/152726/frog"
        />
        <h1 className="text-4xl font-bold mt-2">Rana Habitat LLC</h1>
        <p className="text-xl mt-2">Coming Soon</p>
        <LoadingBar />
      </header>

      <main className="flex-grow container mx-auto p-8">
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
