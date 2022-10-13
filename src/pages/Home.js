import React from 'react'
import AboutPage from '../components/AboutPage';
import ContactForm from '../components/ContactForm';
import HomePage from '../components/HomePage';
import ProjectGallery from '../components/ProjectGallery';
import WebProjects from '../components/WebProjects';

const Home = () => {
  return (
    <div>
     
        <HomePage/>
        <AboutPage/>
       <ProjectGallery/>
       <WebProjects/>
       <ContactForm/>
    </div>
  )
}

export default Home;