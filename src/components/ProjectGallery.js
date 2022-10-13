import React from "react";
import photo1 from "../assets/images/p1.png";
import photo2 from "../assets/images/p2.png";
import photo3 from "../assets/images/p3.png";
import photo4 from "../assets/images/p4.png";
import photo5 from "../assets/images/g1.png";
import photo6 from "../assets/images/g2.png";
import photo7 from "../assets/images/g3.png";
import photo8 from "../assets/images/g4.png";
import photo9 from "../assets/images/g5.png";
import photo10 from "../assets/images/g6.png";
import photo11 from "../assets/images/g7.png";
import photo12 from "../assets/images/g8.png";
import photo13 from "../assets/images/g9.png";
import photo14 from "../assets/images/g10.png";
import photo15 from "../assets/images/g11.png";
import photo16 from "../assets/images/g12.png";
import photo17 from "../assets/images/g13.png";
import photo22 from "../assets/images/p6.png";
import photo23 from "../assets/images/a4.png";
import photo25 from "../assets/images/a7.png";
import Photos from "./Photos";
import "../style.css";

const ProjectGallery = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide gallery container "
      data-bs-ride="carousel"
    >
      <p className="h3 text-center mb-5">Project Gallery</p>
      <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval="auto">
            <img src={photo1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="auto">
            <img src={photo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo9} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo10} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo11} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo12} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo13} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo14} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo15} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo16} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo17} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo22} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo23} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo25} className="d-block w-100" alt="..." />
          </div>
        </div>

      


      <button 
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" style={{width:'50px',backgroundColor:'blue'}}  aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" style={{width:'50px',backgroundColor:'blue'}} aria-hidden="true"></span>
        <span className="visually-hidden" >Next</span>
      </button>
    </div>
  );
};

export default ProjectGallery;
