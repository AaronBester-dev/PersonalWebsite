import "../css/App.css";
import "../css/Page.css";
import aaron from "../files/AaronBester.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../jsx/Navbar";
import WorkReportsBar from "../jsx/WorkReportsBar";

function App() {
  function isMobile() {
    const { innerWidth: width } = window;
    console.log(width);
    if (width < 736) {
      return true;
    } else {
      return false;
    }
  }

  function getMobileIntro() {
    return (
      <div>
        <div className="textbox">
          <h2>
            Hello! My name is Aaron Bester and I am a 21 year old student at the
            University Of Guelph! This is a website to showcase my job
            experiences as a co-op student. I hope you enjoy reading about all
            the amazing experiences I’ve had so far doing coop jobs!
          </h2>
        </div>
      </div>
    );
  }

  function getDesktopIntro() {
    return (
      <div className="textwithphoto">
        <div style={{ marginLeft: "200px" }} className="textbox">
          <h2>
            Hello! My name is Aaron Bester and I am a 21 year old student at the
            University Of Guelph! This is a website to showcase my job
            experiences as a co-op student. I hope you enjoy reading about all
            the amazing experiences I’ve had so far doing coop jobs!
          </h2>
        </div>
        <img
          src={aaron}
          style={{
            height: "18.5%",
            width: "18.5%",
            display: "flex",
            marginRight: "200px",
          }}
          alt="Aaron"
        />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="PageHeader">
        {/* Main Navigation Bar */}
        <br></br>
        <div className="titlefont">Aaron Bester Developer</div>
        <Navbar></Navbar>

        {/*Intro paragraph */}
        {isMobile() ? getMobileIntro() : getDesktopIntro()}
        <br></br>

        {/* //Work Reports */}
        <div>
          <h1>Work Reports</h1>
          <br></br>
          <div className="textbox">
            <h2 style={{ textAlign: "center" }}>
              Below are a list of work reports for each and every one of my work
              terms. Use these to learn more about what jobs I have had
              previously and what I learned from each of them.
            </h2>
          </div>
          <br></br>
          <WorkReportsBar></WorkReportsBar>
        </div>

        {/* Resume */}
        <div>
          <h1>Resume</h1>
          <div className="textbox">
            <h2>
              Below is a copy of my resume which details all of my skills and
              qualifications. Use it to learn about my abilities and what I can
              bring to your company!
            </h2>
          </div>
          <br></br>
          <button className="navbutton">
            <a
              href={require("../files/AaronBesterResume.pdf")}
              className="navlink"
              download="AaronBesterResume"
            >
              Download Resume
            </a>
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </header>
    </div>
  );
}

export default App;
