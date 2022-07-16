import logo from './logo.svg';
import './App.css';

function App() {
  function button(e){
    console.log("YOU PRESSED THE BUTOTN");
  }

  return (
    <div className="App">
      
      
      <header className="App-header">
        <h1>Aaron Bester Developer</h1>
        <div>
          <button onClick={button}>
            <text>Home</text>
          </button>

          <button onClick={button}>
            <text>NCR</text>
          </button>

          <button onClick={button}>
            <text>The Co-operators</text>
          </button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
