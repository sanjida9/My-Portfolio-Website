import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
  };
  return (
    //navigation bar
    <nav className=" sticky-top navbar fs-5 navbar-expand-lg navbar-dark bg-dark navStyle p-3">
      <div className="container-fluid container mx-auto">
        <h1 className="text-white">
          <i>
            <span className="orange">
              <i className="fas fa-laptop"></i>
            </span>
            Sanjida
            <span className="orange">Yeasmin</span>
          </i>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="nav-item m-2">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </div>

            <div className="nav-item m-2">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link active"
                aria-current="page"
                to="/allprojects"
              >
                All Projects
              </NavLink>
            </div>

            <div className="nav-item m-2">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link active"
                aria-current="page"
                to="/aboutme"
              >
                About
              </NavLink>
            </div>
            <div className="nav-item m-2">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link active"
                aria-current="page"
                to="/blog"
              >
                Blog
              </NavLink>
            </div>

            <div className="nav-item m-2">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link active"
                aria-current="page"
                to="/contactme"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
