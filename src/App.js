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
          alt="Logo depicting a turtle"
          title="Turtle icon by Noun Project, from https://thenounproject.com/icon/turtle-846637/"
        />
        <h1>Rana Habitat LLC</h1>
        <p>Coming Soon</p>
      </header>
      <footer className="App-footer">Version: {version}</footer>
    </div>
  );
}

export default App;
