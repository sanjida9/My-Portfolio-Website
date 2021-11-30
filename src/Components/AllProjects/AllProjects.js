import React from "react";

import assi3 from "../../img/ASS-3.jpg";
import assi8 from "../../img/ASS-8.jpg";
import assi9 from "../../img/ASS-9.jpg";
import assi10 from "../../img/ASS-10.jpg";
import assi11 from "../../img/ASS-11.jpg";
import assi12 from "../../img/ASS-12.jpg";

const AllProjects = () => {
  return (
    <div className="container">
      <h1>All Projects</h1>
      <div className="row">
        <div class="card mb-3 container col-md-3 p-1">
          <img
            className="p-3 w-50 mx-auto img-fluid"
            src={assi12}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">Watchful Wrist</h5>
            <p class="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>

            <p class="card-text">
              <a href="">
                <div className="btn btn-primary m-2 ">
                  <i class="fab fa-github"></i>
                </div>
              </a>
              <a href="">
                <div className="btn btn-primary m-2">
                  <i class="fas fa-external-link-square-alt "></i>
                </div>
              </a>
            </p>
          </div>
        </div>
        <div class="card mb-3 container col-md-3 p-1">
          <img
            className="p-3 w-50 mx-auto img-fluid"
            src={assi11}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">World Tours</h5>
            <p class="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <p class="card-text">
              <a href="">
                <div className="btn btn-primary m-2 ">
                  <i class="fab fa-github"></i>
                </div>
              </a>
              <a href="">
                <div className="btn btn-primary m-2">
                  <i class="fas fa-external-link-square-alt "></i>
                </div>
              </a>
            </p>
          </div>
        </div>
        <div class="card mb-3 container col-md-3 p-1">
          <img
            className="p-3 w-50 mx-auto img-fluid"
            src={assi10}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">Optic Care</h5>
            <p class="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <p class="card-text">
              <a href="">
                <div className="btn btn-primary m-2 ">
                  <i class="fab fa-github"></i>
                </div>
              </a>
              <a href="">
                <div className="btn btn-primary m-2">
                  <i class="fas fa-external-link-square-alt "></i>
                </div>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="card mb-3 container col-md-3 p-1">
          <img
            className="p-3 w-50 mx-auto img-fluid"
            src={assi9}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">Learning School</h5>
            <p class="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>

            <p class="card-text">
              <a href="">
                <div className="btn btn-primary m-2 ">
                  <i class="fab fa-github"></i>
                </div>
              </a>
              <a href="">
                <div className="btn btn-primary m-2">
                  <i class="fas fa-external-link-square-alt "></i>
                </div>
              </a>
            </p>
          </div>
        </div>
        <div class="card mb-3 container col-md-3 p-1">
          <img
            className="p-3 w-50 mx-auto img-fluid"
            src={assi8}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">Let's Teach</h5>
            <p class="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <p class="card-text">
              <a href="">
                <div className="btn btn-primary m-2 ">
                  <i class="fab fa-github"></i>
                </div>
              </a>
              <a href="">
                <div className="btn btn-primary m-2">
                  <i class="fas fa-external-link-square-alt "></i>
                </div>
              </a>
            </p>
          </div>
        </div>
        <div class="card mb-3 container col-md-3 p-1">
          <img
            className="p-3 w-50 mx-auto img-fluid"
            src={assi3}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">Honda CBR</h5>
            <p class="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <p class="card-text">
              <a href="">
                <div className="btn btn-primary m-2 ">
                  <i class="fab fa-github"></i>
                </div>
              </a>
              <a href="">
                <div className="btn btn-primary m-2">
                  <i class="fas fa-external-link-square-alt "></i>
                </div>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
