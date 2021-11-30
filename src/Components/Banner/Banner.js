import React from "react";
// import Typed from "react-typed";
import Typical from "react-typical";

import banner from "../../img/img.jpg";

const Banner = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="col-md-5 mt-5">
          <div className="align-items-center d-flex justify-content-center  ">
            <h1>
              <Typical
                className=""
                steps={[
                  "Hello ",
                  "Hello I am Sanjida Yeasmin",
                  1000,
                  "Hello ",
                  "Hello I am Web Developer",
                  1000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>
          </div>
          <br />
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
