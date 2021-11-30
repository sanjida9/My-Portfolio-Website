import React from "react";
import "./Details1.css";
import oneone from "../../img/ASS-12.jpg";
import onetwo from "../../images/oneTwo.png";
import onethree from "../../images/oneThree.png";
// import onefour from "../../images/oneFour.png";

const Details1 = () => {
  return (
    <div>
      <div className="mt-5 containner">
        <div className="border-0 card">
          <div className="w-75 card-img-top " style={{ margin: "0 auto" }}>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={oneone} class="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src={onetwo} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={onethree} class="d-block w-100" alt="..." />
                </div>
                {/* <div className="carousel-item">
                  <img src={one} class="d-block w-100" alt="..." />
                </div> */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="mt-3 card-body" style={{ margin: "0 auto" }}>
            <h1 className="mb-2 card-title fw-bold">Watchful Wrist</h1>
            <p className="card-text text-secondary text-start">
              <i class="fas fa-arrow-circle-right me-1 "></i>It's a website
              which is about selling different kind of watches
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>Users can choose
              their watches from here
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>They can book the
              watches
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>For placing order
              they need to register and then login
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>admin can manage
              the site and they can see all the orders from customer
            </p>
            <div className="d-flex">
              <a
                target="_blank"
                href="https://github.com/sanjida9/WatchfulWrist_Frontend"
                className="btn btn-primary me-4"
              >
                <i class="fab fa-github me-2"></i>
                Github Client Link
              </a>
              <a
                target="_blank"
                href="https://github.com/sanjida9/WatchfulWrist-Backend"
                className="btn btn-primary me-4"
              >
                <i class="fab fa-github me-2"></i>
                Github Server Link
              </a>
              <a
                target="_blank"
                href="https://watchfulwrist2.web.app/"
                class="btn btn-primary me-4 "
              >
                <i class="fas fa-external-link-square-alt me-2"></i>
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details1;
