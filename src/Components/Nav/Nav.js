import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container ">
          <NavLink to="/" class="navbar-brand">
            Sanjida Yeasmin
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/contactme"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;