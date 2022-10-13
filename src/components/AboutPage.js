import React from "react";
import "../style.css";
import portfolio from "../assets/images/portfolio.jpg";
import photo from "../assets/images/aditya.jpeg";

import "../animations.css";

const AboutPage = () => {
  return (
    <div className="container text-center">
      <div>
        <p className="h3 mt-5">About Me</p>
        <p className="h6 mb-5">Why Choose Me?</p>
        <div className="">
          <hr className="hr hr-blurry line" />
        </div>
      </div>
      <div className="row  box ">
        <div className="col-md-6">
          <img src={photo} className="port-image" />
        </div>

        <div className="col-md-6">
          <p className=" para1">
            Frontend Web Developer with background knowledge of
            reactjs with redux, along with a knack of building applications
            with utmost efficiency. Strong professional with a Bachelor's Degree
            (B.Tech) willing to be an asset for an organization.
          </p>

          <p className="para2">
            <span className="heading1">Here are a Few Highlights:</span>
            <br /> *Frontend web development
            <br />
            *Interactive Front End as per the design <br />* Reactjs
            and Javascript
            <br /> * Redux for State Mnanagement
            <br /> *API Integration <br />
            *Managing database
          </p>

          <div className="row mt-5  ">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
              <button type="button" className="hire  ">
                Hire Me
              </button>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
              <button type="button" className="resume  ">
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
