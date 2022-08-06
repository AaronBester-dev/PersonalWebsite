import "./App.css";
import "./Page.css";
import rat from "./images/rat.jpg";

import Navbar from "./Navbar";
import WorkReportsBar from "./WorkReportsBar";

function App() {
  return (
    <div className="App">
      <header className="PageHeader">
        {/* Main Navigation Bar */}
        <Navbar></Navbar>

        {/* Welcome */}
        <div className="ratphoto">
          <div className="block">
            <p>
              Hello! My name is Aaron Bester and I am a 21 year old student at
              the University Of Guelph! This is a website to showcase my job
              experiences as a co-op student. I hope you enjoy reading about all
              the amazing experiences I’ve had so far doing coop jobs!
            </p>
          </div>
          <img src={rat} alt="rat" />
        </div>

        {/* //Work Reports */}
        <div>
          <h1>Work Reports</h1>
          <div className="block">
            <p>
              Below are a list of work reports for each and every one of my work
              terms. Use these to learn more about what jobs I have had
              previously and what I learned from each of them.
            </p>
          </div>
          <WorkReportsBar></WorkReportsBar>
        </div>

        {/* Resume */}
        <div>
          <h1>Resume</h1>
          <div className="block">
            <p>
              Below is a copy of my resume which details all of my skills and
              qualifications. Use it to learn about my abilities and what I can
              bring to your company!
            </p>
          </div>
          <a href={require("./images/AaronBesterResume.pdf")} download="myFile">Download file</a>
        </div> </header>
    </div>
  );
}

export default App;
