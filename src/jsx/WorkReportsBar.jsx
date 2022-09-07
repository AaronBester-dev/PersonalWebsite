import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function WorkReportsBar() {
  return (
    <div className="Navbar">
      <div>
        <Link to="/cooperators" className="navbutton">Co-operators</Link>
        <Link to="/ncr2021" className="navbutton">NCR 2021</Link>
        <Link to="/ncr2022" className="navbutton">NCR 2022</Link>
      </div>
      <br></br>
    </div>
  );
}

export default WorkReportsBar;
