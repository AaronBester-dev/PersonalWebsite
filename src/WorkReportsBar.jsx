import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function WorkReportsBar() {
  return (
    <div className="Navbar">
      <div>
        <Link to="/" className="navbutton">The Cooperators</Link>
        <Link to="/ncr" className="navbutton">NCR 2021</Link>
        <Link to="/ncr" className="navbutton">NCR 2022</Link>
      </div>
      <br></br>
    </div>
  );
}

export default WorkReportsBar;
