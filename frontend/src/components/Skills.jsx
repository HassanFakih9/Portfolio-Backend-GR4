import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './skills.css';

const Skills = () => {
  const [images, setImages] = useState([]);
  const [skillsList, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/skills');
        const skills = response.data;
        const imageUrls = skills.map(skill => skill.image);
        setImages(imageUrls);
        setSkills(skills);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <div>
        <h1 className='Skills-title'>SKILLS</h1>
      </div>
      <div className='container1'>
        {skillsList.map((skill, index) => (
          <div className='skill-container' key={index}>
            <div
              className='cont-img'
              style={{
                backgroundImage: `url(http://localhost:5000/images/${images[index]})`,
                backgroundSize: 'cover',
                height: '150px',
                backgroundRepeat: 'no-repeat',
              }}
              >
              </div>
            <p className='skill-name'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;