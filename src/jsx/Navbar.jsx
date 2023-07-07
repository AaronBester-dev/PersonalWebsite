import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container } from "@mui/material";

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <div className="container">
          <div className="row" >
            <div className="col">
              <Link to="/" className="navbutton">Home</Link>
            </div>
            <div className="col">
              <Link to="/cooperators" className="navbutton">Co-operators Work Report</Link>
            </div>
            <div className="col">
              <Link to="/ncr2021" className="navbutton">NCR 2021 Work Report</Link>
            </div>
            <div className="col">
              <Link to="/ncr2022" className="navbutton">NCR 2022 Work Report</Link>
            </div>
            <div className="col">
              <Link to="/ncr2022" className="navbutton">CellScale Work Report</Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Navbar;
