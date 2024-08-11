import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [bombActivated, setBombActivated] = useState(false);

  const activateBomb = () => {
    setBombActivated(true);

    for (let i = 0; i < 1e8; i++) {
      Math.random();
    }

    setBombActivated(false);
  };
  // err
  Error naaaa
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          T_Touch: Print Hello Worlddddd!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
        <button className="App-bomb" onClick={activateBomb} disabled={bombActivated}>
          {bombActivated ? 'Boom... Slowing down...' : 'Activate Bomb'}
        </button>
      </header>
    </div>
  );
}

export default App;
