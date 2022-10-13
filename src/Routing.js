import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoToTopPage from "./components/GoToTopPage";
import ProjectGallery from "./components/ProjectGallery";
import WhatsappChat from "./components/WhatsappChat";
import Header from "./layouts/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/gallery" element={<ProjectGallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsappChat/>
      <GoToTopPage/>
    </BrowserRouter>
  );
};

export default Routing;
