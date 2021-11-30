import React from "react";
import { Link, NavLink } from "react-router-dom";
import assi8 from "../../img/ASS-8.jpg";
import assi9 from "../../img/ASS-9.jpg";
import assi10 from "../../img/ASS-10.jpg";
import assi11 from "../../img/ASS-11.jpg";
import assi12 from "../../img/ASS-12.jpg";

import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="fw-bold text-primary p-5">My Projects</h1>
      <div class="card mb-3 container p-5">
        <img
          className=" w-50 mx-auto img-fluid"
          src={assi12}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold text-primary">Watchful Wrist</h5>
          <p class="card-text ">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
          <h4 className="fw-bold text-primary mt-2">Technologies:</h4>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            React.js
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            Axios
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            MongoDB
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            Node.js
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            Bootstrap5
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            Firebase Authentication
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            Private Route
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm m-1">
            Heroku
          </button>
          <p class="card-text">
            <NavLink to="/details1">
              <div className="btn btn-primary mt-2">View Details</div>
            </NavLink>
          </p>
        </div>
      </div>
      <div class="card mb-3 container p-5">
        <img
          className="p-3 w-50 mx-auto img-fluid"
          src={assi11}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold text-primary">World Tours</h5>
          <p class="card-text ">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
          <h4 className="fw-bold text-primary">Technologies:</h4>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>

          <p class="card-text">
            <div className="btn btn-primary mt-2">View Details</div>
          </p>
        </div>
      </div>
      <div class="card mb-3 container p-5">
        <img
          className="p-3 w-50 mx-auto img-fluid"
          src={assi10}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold text-primary">Optic Care</h5>
          <p class="card-text ">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
          <h4 className="fw-bold text-primary">Technologies:</h4>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-sm m-1">
            Secondary
          </button>
          <p class="card-text">
            <div className="btn btn-primary mt-2">View Details</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
