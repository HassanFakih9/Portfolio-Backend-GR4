import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Header from './components/header';
import TextImageSection from "./components/image-header"
import  "./components/footer.css";
import  "./components/DownloadButton.css";
import Footer from './components/Footer';
import GitHubLink from './components/GitHubLink';
import LinkedInImage from './components/LinkedInImage';
import DownloadButton from './components/DownloadButton';
import "./App.css"



function App() {
  return (
    <div>
     
   
      <Dashboard/>
      <Header/>
      <TextImageSection/>
      <Skills />
      <Projects />
      <Experience />
      <DownloadButton />
      <GitHubLink />
      <LinkedInImage />
      <Footer />
    </div>

  );
}

export default App;
