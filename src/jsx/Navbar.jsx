import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <Link to="/" className="navbutton">Home</Link>
        <Link to="/cooperators" className="navbutton">Co-operators Work Report</Link>
        <Link to="/ncr2021" className="navbutton">NCR 2021 Work Report</Link>
        <Link to="/ncr2022" className="navbutton">NCR 2022 Work Report</Link>
      </div>
      <br></br>
    </div>
  );
}

export default Navbar;
