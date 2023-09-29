import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./skills.css"



const Skills = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/skills'); // Assuming your API route for getting skills is '/api/skills'
        const skills = response.data;
        const imageUrls = skills.map(skill => skill.image);
        setImages(imageUrls);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
    <div>
      <h1 className='Skills-title'>SKILLS</h1>
    </div>
    <div className='container1'>
   {images.map((imageUrl, index) => (
      <div className='cont-img' style=
      {{backgroundImage:`url(http://localhost:5000/images/${imageUrl})`,
      backgroundSize: 'cover', 
        height: '150px',
        backgroundRepeat: 'no-repeat',
      }}>  
      </div>
      ))}
    </div>
    </div>
  );
};



export default Skills;