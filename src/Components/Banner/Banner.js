import React from "react";
import { NavLink } from "react-router-dom";
import banner from "../../img/img.jpg";

const Banner = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="col-md-5 align-items-center ">
          <a href="https://drive.google.com/uc?export=download&id=1hJZT53NZNl9Tct9o2kQbNY3g_zWPNKtO">
            <div className="btn btn-primary">Download Resume</div>
          </a>
        </div>
        <div className="col-md-7">
          <div>
            <img className="img-fluid" src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
