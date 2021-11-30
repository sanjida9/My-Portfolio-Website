import React from "react";
import "./Details2.css";
// import oneone from "../../images/oneOne.png";
// import onetwo from "../../images/oneTwo.png";
// import onethree from "../../images/oneThree.png";
// import onefour from "../../images/oneFour.png";
import one from "../../img/ASS-12.jpg";

const Details2 = () => {
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
                  <img src={one} class="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src={one} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={one} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={one} class="d-block w-100" alt="..." />
                </div>
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
            <h1 className="mb-2 card-title fw-bold">World Tours</h1>
            <p className="card-text text-secondary text-start">
              <i class="fas fa-arrow-circle-right me-1 "></i>Using more products
              section users will be able to see all our lamps collection.
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>Users have
              review,payment and my order feature.Payment system will be updated
              as soon as possible.
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>Users can easily
              buy our products by login their accounts.If they visit first time
              in our website they need to register then they will be able to
              login their account.
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>When admin confirm
              their orders they will be able to see shipped in their respective
              account.
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>When admin add any
              new product users will be able to see in more products section.
              <br />
              <i class="fas fa-arrow-circle-right me-1 "></i>Admin can able to
              delete any orders if products are not available right now.
            </p>
            <div className="d-flex">
              <a
                target="_blank"
                href="https://github.com/sanjida9/Tourism-Frontend"
                className="btn btn-primary me-4"
              >
                <i class="fab fa-github me-2"></i>
                Github Client Link
              </a>
              <a
                target="_blank"
                href="https://github.com/sanjida9/Tourism-Backend"
                className="btn btn-primary me-4"
              >
                <i class="fab fa-github me-2"></i>
                Github Server Link
              </a>
              <a
                target="_blank"
                href="https://tuorism-delivery-website.web.app/"
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

export default Details2;
