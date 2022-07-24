import logo from './logo.svg';
import './App.css';
import rat from './images/rat.jpg'

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

        <div className='ratphoto'>
          <div className="block">
            <p>
            Hello! My name is Aaron Bester and I am a 21 year old student at the University Of Guelph! 
            This is a website to showcase my job experiences as a co-op student. I hope you enjoy reading 
            about all the amazing experiences I’ve had so far doing coop jobs!
            </p>
          </div>
          <img src={rat} alt="rat" />
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
