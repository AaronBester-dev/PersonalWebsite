import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function WorkReportsBar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="navbutton">
              <Link to="/cooperators" className="navlink">
                Co-operators
              </Link>
            </button>
          </div>
          <div className="col">
            <button className="navbutton">
              <Link to="/ncr2021" className="navlink">
                NCR 2021
              </Link>
            </button>
          </div>
          <div className="col">
            <button className="navbutton">
              <Link to="/ncr2022" className="navlink">
                NCR 2022
              </Link>
            </button>
          </div>
          <div className="col">
            <button className="navbutton">
              <Link to="/cellscale" className="navlink">
                CellScale
              </Link>
            </button>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default WorkReportsBar;
