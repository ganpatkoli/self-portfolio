import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav
          className="navbar fixed-top navbar-expand-lg fixed-top"
          id="navbar"
        >
          <a
            href="#home"
            className="navbar-brand ms-5"
            style={{ color: "#f89494" }}
          >
            GanpaT Koli
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id="toggle_Icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav  colorblack  lg-align-item-center"
              id="Ul_cneter"
            >
              <li className="nav-item ">
                <a
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#home"
                  id="hover_effect"
                >
                  Home
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" id="hover_effect" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" id="hover_effect" href="#project">
                  Project
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" id="hover_effect" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" id="hover_effect" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="social_icons mx-5">
              <i className="fab fa-facebook-f mx-2 icons"></i>
              <i className="fab fa-linkedin-in mx-2 icons"></i>
              <i className="fab fa-instagram  mx-2 icons"></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
