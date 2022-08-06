import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function WorkReportsBar() {
  return (
    <div className="Navbar">
      <div>
        <Link to="/ncr" className="button-9">NCR</Link>
        <Link to="/" className="button-9">The Cooperators</Link>
      </div>
      <br></br>
    </div>
  );
}

export default WorkReportsBar;
