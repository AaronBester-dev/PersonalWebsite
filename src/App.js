import "./App.css";
import "./Page.css";
import aaron from "./images/AaronBester.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Navbar";
import WorkReportsBar from "./WorkReportsBar";

function App() {
  return (
    <div className="App">
      <header className="PageHeader">
        {/* Main Navigation Bar */}
        <br></br>
        <div className="bigboy">Aaron Bester Developer</div>
        <Navbar></Navbar>

        {/*Intro paragraph */}
        <div className="ratphoto">
          <div className="block">
            <h1>
              Hello! My name is Aaron Bester and I am a 21 year old student at
              the University Of Guelph! This is a website to showcase my job
              experiences as a co-op student. I hope you enjoy reading about all
              the amazing experiences I’ve had so far doing coop jobs!
            </h1>
          </div>
          <img src={aaron} style={{height: "500px", width: "500px", display:"flex"}} className="img-fluid" alt="rat" />
        </div>

        {/* //Work Reports */}
        <div>
          <h1>Work Reports</h1>
          <div className="block">
            <h1>
              Below are a list of work reports for each and every one of my work
              terms. Use these to learn more about what jobs I have had
              previously and what I learned from each of them.
            </h1>
          </div>
          <br></br>
          <WorkReportsBar></WorkReportsBar>
        </div>

        {/* Resume */}
        <div>
          <h1>Resume</h1>
          <div className="block">
            <h1>
              Below is a copy of my resume which details all of my skills and
              qualifications. Use it to learn about my abilities and what I can
              bring to your company!
            </h1>
          </div>
          <br></br>
          <a href={require("./images/AaronBesterResume.pdf")} className="navbutton" download="myFile">Download file</a>
        </div> </header>
    </div>
  );
}

export default App;
