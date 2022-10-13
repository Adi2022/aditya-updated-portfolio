import React from "react";
import "../style.css";
import "../animations.css";
import Typewriter from "typewriter-effect";
import photo from "../assets/images/aditya.jpeg";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import * as Scroll from "react-scroll";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="custom-bg">
      <div className="row container text-center ">
        <div className="col-md-7">
          <p className="h3 text-white mt-5">
            Hello, I'M <span style={{ color: "#F33A6A	" }}>Aditya</span>
          </p>
          <p className="home-para">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I am a Frontend Developer",
                  "I am also a Full Stack Devloper",
                  "I am also a YouTuber",
                ],
              }}
            />
          </p>

          <p className="para-info">
            Knack of building applications with front and back end operations.
          </p>
          <div className="row mt-5 ">
            <div className="col-lg-6 col-xs-6 col-md-6 col-sm-6">
               <NavLink to="/contact">
               <button type="button" className="hire glow-on-hover ">
                  Hire Me
                </button>
               </NavLink>
               
                
              
            </div>
            <div className="col-lg-6 col-xs-6 col-md-6 col-sm-6">
              <a href="ADITYARESUME.pdf" download="ADITYARESUME.pdf">
                <button type="button" className="resume glow-on-hover">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-5 ">
          <img src={photo} className=" image1 " />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
