import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom"; // Import Routes
import SkillForm from "./SkillForm";
import EducationForm from "./Educationform";
import ExperienceForm from "./ExperienceForm";
import ProjectForm from "./ProjectForm";
import List from "./List";
import ImageList from "./ImageList";
import axios from "axios";
import Navbar from "./Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Header from "./components/header";
import TextImageSection from "./components/image-header";
import Dashboard from "./Dashboard";
// import LoginForm from './LoginForm';
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleShowImages = () => {
    setShowImages(true);
  };

  useEffect(() => {
    // Fetch skills data
    axios.get("http://localhost:5000/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("http://localhost:5000/api/education").then((response) => {
      setEducations(response.data);
    });
    axios.get("http://localhost:5000/api/experience").then((response) => {
      setExperiences(response.data);
    });
    axios.get("http://localhost:5000/api/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  const handleSkillSubmit = (formData) => {
    axios
      .post("http://localhost:5000/api/skills/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for FormData
        },
      })
      .then((response) => {
        axios.get("http://localhost:5000/api/skills").then((response) => {
          setSkills(response.data);
        });
      })
      .catch((error) => {
        console.error("Error adding skill:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      });
  };

  const handleEducationSubmit = (educationData) => {
    axios
      .post("http://localhost:5000/api/education", educationData)
      .then((response) => {
        // Refresh the education list
        axios.get("http://localhost:5000/api/education").then((response) => {
          setEducations(response.data);
        });
      })
      .catch((error) => {
        console.error("Error adding education:", error);
      });
  };

  const handleExperienceSubmit = (experienceData) => {
    axios
      .post("http://localhost:5000/api/experience", experienceData)
      .then((response) => {
        // Refresh the education list
        axios.get("http://localhost:5000/api/experience").then((response) => {
          setExperiences(response.data);
        });
      })
      .catch((error) => {
        console.error("Error adding Experience:", error);
      });
  };
  const handleProjectSubmit = (projectData) => {
    axios
      .post("http://localhost:5000/api/projects", projectData)
      .then((response) => {
        // Refresh the projects list
        axios.get("http://localhost:5000/api/projects").then((response) => {
          setProjects(response.data);
        });
      })
      .catch((error) => {
        console.error("Error adding project:", error);
      });
  };
  const handleDelete = (itemId, itemType) => {
    axios
      .delete(`http://localhost:5000/api/${itemType}/${itemId}`)
      .then((response) => {
        if (itemType === "skills") {
          setSkills((prevSkills) => prevSkills.filter((s) => s._id !== itemId));
        } else if (itemType === "education") {
          setEducations((prevEducations) =>
            prevEducations.filter((e) => e._id !== itemId)
          );
        } else if (itemType === "experience") {
          setExperiences((prevExperiences) =>
            prevExperiences.filter((exp) => exp._id !== itemId)
          );
        } else if (itemType === "projects") {
          setProjects((prevProjects) =>
            prevProjects.filter((exp) => exp._id !== itemId)
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
  const SkillsComponent = () => {
    return (
      <div>
        <Navbar />
        <SkillForm handleSkillSubmit={handleSkillSubmit} />
        <List
          items={skills}
          onDelete={(itemId) => handleDelete(itemId, "skills")}
        />
        <button onClick={handleShowImages}>Show Images</button>
        {showImages && <ImageList />}
      </div>
    );
  };

  const EducationsComponent = () => {
    return (
      <div>
        <Navbar />
        <EducationForm handleEducationSubmit={handleEducationSubmit} />
        <List
          items={educations}
          onDelete={(itemId) => handleDelete(itemId, "education")}
        />
      </div>
    );
  };

  const ExperiencesComponent = () => {
    return (
      <div>
        <Navbar />
        <ExperienceForm handleExperienceSubmit={handleExperienceSubmit} />
        <List
          items={experiences}
          onDelete={(itemId) => handleDelete(itemId, "experience")}
        />
      </div>
    );
  };

  const ProjectsComponent = () => {
    return (
      <div>
        <Navbar />
        <ProjectForm handleProjectSubmit={handleProjectSubmit} />
        <List
          items={projects}
          onDelete={(itemId) => handleDelete(itemId, "projects")}
        />
      </div>
    );
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/skills" element={<SkillsComponent />} />
          <Route path="/educations" element={<EducationsComponent />} />
          <Route path="/experiences" element={<ExperiencesComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

function HomePage() {
  return (
    <div>
      <Header />
      <TextImageSection />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);

  // if (!authenticated) {
  //   return <LoginForm setAuthenticated={setAuthenticated} />;
  // }

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
