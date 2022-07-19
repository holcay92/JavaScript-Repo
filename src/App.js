import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{"I am spinning!!!"}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {"Welcome to Setur :)"}
        </p>
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
