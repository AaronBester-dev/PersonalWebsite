import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {

  return (
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="navbutton">
              <Link to="/" className="navlink">Home</Link>
            </button>
          </div>
          <div className="col">
            <button className="navbutton">
              <Link to="/cooperators" className="navlink">Co-operators Work Report</Link>
            </button>
          </div>
          <div className="col">
            <button className="navbutton">
              <Link to="/ncr2021" className="navlink">
                NCR 2021 Work Report
              </Link>
            </button>
          </div>
          <div className="col">
            <button className="navbutton">
              <Link to="/ncr2022" className="navlink">
                NCR 2022 Work Report
              </Link>
            </button>
          </div>
          <div className="col">
            <button className="navbutton">
              <Link to="/cellscale" className="navlink">
                CellScale Work Report
              </Link>
            </button>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Navbar;
