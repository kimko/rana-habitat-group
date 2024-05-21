import logo from './logo.svg';
import './App.css';
import { version } from './version';

const LOADING = ['🌳', '🌲', '🌿', '🍃', '🍀', '🌱', '♻️', '🐢', '🐸'];

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
        <h1>Rana Habitat LLC</h1>
        <p>Coming Soon</p>
        <div className="loading-bar">
          {LOADING.map((emoji, index) => (
            <span key={index}>{emoji}</span>
          ))}
        </div>
      </header>
      <footer className="App-footer">Version: {version}</footer>
    </div>
  );
}

export default App;
