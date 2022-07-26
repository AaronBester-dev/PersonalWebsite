import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Aaron Bester Developer</h1>
      <div>
        <Link to="/" className="button-9">Home</Link>
        <Link to="/ncr" className="button-9">NCR</Link>
        <Link to="/" className="button-9">The Cooperators</Link>
      </div>
      <br></br>
    </div>
  );
}

export default Navbar;
