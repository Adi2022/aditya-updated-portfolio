import React from "react";
import pic1 from "../assets/images/A1.png";
import pic2 from "../assets/images/A3.png";
import pic3 from "../assets/images/A6.png";
import pic4 from "../assets/images/A8.png";
import pic5 from "../assets/images/A10.png";
import pic6 from "../assets/images/A11.png";
import "../style.css";
const WebProjects = () => {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <p className="h2 mypro mb-5 mt-4">My Projects</p>
        <div className="col-md-4">
          <div class="card mb-3">
            <img src={pic1} className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Project-1</h5>
              <p class="card-text">
                Designed this Project using Reactjs.Used styled components for
                design. Used React Hooks to pass data from one component to
                other.Used Context API and useReducer Hooks.
              </p>
              <a href="https://portfolioweapp.netlify.app" target="_blank">
                <button type="button" className="resume  ">
                Open Project
                </button>
               
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={pic2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project-2</h5>
              <p className="card-text">
                Designed this Project using Reactjs.Used styled components for
                design. Used React Hooks to pass data from one component to
                other.Used Context API and useReducer Hooks..
              </p>
              <a
                href="https://indian-art-shopping-mart.netlify.app"
                target="_blank"
                className="openbtn"
              >
                 <button type="button" className="resume  ">
                Open Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={pic3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project-3</h5>
              <p className="card-text">
                Designed this Project using Reactjs.Used styled components for
                design. Used React Hooks to pass data from one component to
                other.Used Context API and useReducer Hooks..
              </p>
              <a
                href="https://shoppingcart2022.netlify.app"
                target="_blank"
                className="openbtn"
              >
                <button type="button" className="resume  ">
                Open Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={pic4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project-4</h5>
              <p className="card-text">Designed this Project using Reactjs.</p>
              <a
                href="https://mypizza-website.netlify.app/"
                target="_blank"
                className="openbtn"
              >
                 <button type="button" className="resume  ">
                Open Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={pic5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project-5</h5>
              <p className="card-text">
                Designed Using Javascript,CSS and HTML.
              </p>
              <a
                href="https://javascriptcalc12.netlify.app"
                target="_blank"
                className="openbtn"
              >
                  <button type="button" className="resume  ">
                Open Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={pic6} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Project-6</h5>
              <p className="card-text">
                Designed Using Javascript,CSS and HTML.
              </p>
              <a
                href="https://studentmarksrecord.netlify.app"
                target="_blank"
                className="openbtn"
              >
                  <button type="button" className="resume  ">
                Open Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProjects;
