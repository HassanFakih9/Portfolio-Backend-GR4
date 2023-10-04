import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
//import Header from './components/Header';
import TextImageSection from "./components/image-header";
import Dashboard from "./Dashboard";
import "./components/header.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div>
      <nav className="container">
        <div className="dashboard-icon-container">
          <Link to="/dashboard">
            <DashboardIcon sx={{ fontSize: 50 }} />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <HashLink to="#textImageSection" smooth={true} duration={500}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="#experience" smooth={true} duration={500}>
              Experience
            </HashLink>
          </li>
          <li>
            <HashLink to="#projects" smooth={true} duration={500}>
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink to="#skills" smooth={true} duration={500}>
              Skills
            </HashLink>
          </li>
        </ul>
      </nav>

      <section id="textImageSection">
        <TextImageSection />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
