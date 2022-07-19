import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App =() => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      
      <header className="App-header">
        <button  onClick={() => setCounter((prevCount) => prevCount - 1)}> -</button>
        <h1> {counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}> +</button>

        <p>{"I am spinning!!!"}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {"Welcome to Setur :)"}
        </p>
        <h3> Hello Halil</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click To Learn React With Setur
        </a>
      </header>
    </div>
  );
}

export default App;
