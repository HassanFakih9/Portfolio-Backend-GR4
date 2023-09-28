import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes
import SkillForm from './SkillForm';
import EducationForm from './Educationform';
import ExperienceForm from './ExperienceForm';
import ProjectForm from './ProjectForm';
import List from './List';
import ImageList from './ImageList';
import axios from 'axios';

const Dashboard = () => {
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
      axios.get('http://localhost:5000/api/skills').then((response) => {
        setSkills(response.data);
      });
      axios.get('http://localhost:5000/api/education').then((response) => {
        setEducations(response.data);
      });
      axios.get('http://localhost:5000/api/experience').then((response) => {
        setExperiences(response.data);
      });
      axios.get('http://localhost:5000/api/projects').then((response) => {
        setProjects(response.data);
      });
  
    }, []);
  
  
    const handleSkillSubmit = (formData) => {
      axios
        .post('http://localhost:5000/api/skills/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type for FormData
          },
        })
        .then((response) => {
          console.log('Skill added successfully:', response.data);
          // Refresh the skills list
          axios.get('http://localhost:5000/api/skills').then((response) => {
            setSkills(response.data);
          });
        })
        .catch((error) => {
          console.error('Error adding skill:', error.message);
          if (error.response) {
            console.error('Response data:', error.response.data);
          }
        });
    };
  
  
  
  
    const handleEducationSubmit = (educationData) => {
      axios
        .post('http://localhost:5000/api/education', educationData)
        .then((response) => {
          // Refresh the education list
          axios.get('http://localhost:5000/api/education').then((response) => {
            setEducations(response.data);
          });
  
        })
        .catch((error) => {
          console.error('Error adding education:', error);
        });
    };
  
    const handleExperienceSubmit = (experienceData) => {
      axios
        .post('http://localhost:5000/api/experience', experienceData)
        .then((response) => {
          // Refresh the education list
          axios.get('http://localhost:5000/api/experience').then((response) => {
            setExperiences(response.data);
          });
  
        })
        .catch((error) => {
          console.error('Error adding Experience:', error);
        });
    };
    const handleProjectSubmit = (projectData) => {
      axios
        .post('http://localhost:5000/api/projects', projectData)
        .then((response) => {
          // Refresh the projects list
          axios.get('http://localhost:5000/api/projects').then((response) => {
            setProjects(response.data);
          });
  
  
        })
        .catch((error) => {
          console.error('Error adding project:', error);
        });
    };
    const handleDelete = (itemId, itemType) => {
      // Send a DELETE request to the server to delete the item
      axios
        .delete(`http://localhost:5000/api/${itemType}/${itemId}`)
        .then((response) => {
          if (itemType === 'skills') {
            setSkills((prevSkills) => prevSkills.filter((s) => s._id !== itemId));
          } else if (itemType === 'education') {
            setEducations((prevEducations) =>
              prevEducations.filter((e) => e._id !== itemId)
            );
          } else if (itemType === 'experience') {
            setExperiences((prevExperiences) =>
              prevExperiences.filter((exp) => exp._id !== itemId)
            );
          } else if (itemType === 'projects') {
            setProjects((prevProjects) =>
              prevProjects.filter((exp) => exp._id !== itemId)
            );
          }
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    };
    const SkillsComponent = () => {
        // Your skills-related components and logic go here
        return (
          <div>
            <SkillForm handleSkillSubmit={handleSkillSubmit} />
            <List items={skills} onDelete={(itemId) => handleDelete(itemId, 'skills')} />
            <button onClick={handleShowImages}>Show Images</button>
        {showImages && <ImageList />} {/* Render ImageList when showImages is true */}
          </div>
        );
      };
      
      const EducationsComponent = () => {
        // Your educations-related components and logic go here
        return (
          <div>
            <EducationForm handleEducationSubmit={handleEducationSubmit} />
            <List items={educations} onDelete={(itemId) => handleDelete(itemId, 'education')} />
          </div>
        );
      };
      
      const ExperiencesComponent = () => {
        // Your experiences-related components and logic go here
        return (
          <div>
            <ExperienceForm handleExperienceSubmit={handleExperienceSubmit} />
            <List items={experiences} onDelete={(itemId) => handleDelete(itemId, 'experience')} />
          </div>
        );
      };
      
      const ProjectsComponent = () => {
        // Your projects-related components and logic go here
        return (
          <div>
            <ProjectForm handleProjectSubmit={handleProjectSubmit} />
            <List items={projects} onDelete={(itemId) => handleDelete(itemId, 'projects')} />
          </div>
        );
      };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/educations">Educations</Link>
            </li>
            <li>
              <Link to="/experiences">Experiences</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Use Routes as the container */}
          <Route path="/skills" element={<SkillsComponent />} />
          <Route path="/educations" element={<EducationsComponent />} />
          <Route path="/experiences" element={<ExperiencesComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
        </Routes>


      </div>
    </Router>
  );
};



export default Dashboard;
