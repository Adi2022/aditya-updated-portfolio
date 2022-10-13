import React from 'react'
import { NavLink } from "react-router-dom";
import '../style.css';
const Header = () => {
  return (
    
    <nav class="navbar navbar-expand-lg bg position-static">
    <div class="container">
      <a class="navbar-brand text-white fw-bold fs-1" href="/" >
        ADITYA TRIVEDI
      </a>
      <button style={{background:'white'}}
        class="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto mb-3    ">
          <li class="nav-item ">
          <NavLink   className="nav-link text-white fw-bold fs-5  "  to="/">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
          <NavLink href="about" className="nav-link text-white fw-bold fs-5" to="/about">
              About
            </NavLink>
          </li>
          {/* <li class="nav-item">
          <NavLink className="nav-link text-white fw-bold fs-5 " to="/resume">
              Resume
            </NavLink>
          </li> */}
          <li class="nav-item">
          <NavLink className="nav-link text-white fw-bold fs-5 " to="/gallery">
              Project Gallery
            </NavLink>
          </li>
          <li class="nav-item">
          <NavLink className="nav-link text-white fw-bold fs-5 " to="/projects">
              Projects
            </NavLink>
          </li>
          <li class="nav-item">
          <NavLink className="nav-link text-white fw-bold fs-5 "   to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header