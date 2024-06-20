import React from 'react';
import LoadingBar from './components/LoadingBar';
import Education from './components/Education';
import logo from './logo.svg';
import './App.css';
import { version } from './version';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="Logo frog"
          title="Made by SVG Repo: https://www.svgrepo.com/svg/152726/frog"
        />
        <h1 class="text-4xl font-bold">Rana Habitat LLC</h1>
        <p>Coming Soon</p>
        <LoadingBar />
      </header>

      <main>
        <Education />
        {/* <Experience />
      <Leadership />
      <Publications />
      <Certifications /> */}
      </main>
      <footer className="App-footer">Version: {version}</footer>
    </div>
  );
}

export default App;
