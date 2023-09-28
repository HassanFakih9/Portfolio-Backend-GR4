import React, { useState } from 'react';
import axios from 'axios';

const SkillForm = ({ handleSkillSubmit }) => {
  const [skillData, setSkillData] = useState({
    name: '',
    level: '',
    description: '',
    image: "", // Store the selected image file
  });

  const handleSubmit = () => {
    // Create a FormData object to send the skill data along with the image
    const formData = new FormData();
    formData.append('name', skillData.name);
    formData.append('level', skillData.level);
    formData.append('description', skillData.description);
    formData.append('image', skillData.image); // Append the selected image

    // Call the handleSkillSubmit function with the FormData
    handleSkillSubmit(formData);

    // Clear the form inputs after submission
    setSkillData({
      name: '',
      level: '',
      description: '',
      image: ""
    });
  };

  const handleImageChange = (e) => {
    // Store the selected image file in the state
    setSkillData({ ...skillData, image: e.target.files[0] });
    console.log(skillData.image);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Skill Name"
        value={skillData.name}
        onChange={(e) => setSkillData({ ...skillData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Skill Level"
        value={skillData.level}
        onChange={(e) => setSkillData({ ...skillData, level: e.target.value })}
      />
      <input
        type="text"
        placeholder="Skill Description"
        value={skillData.description}
        onChange={(e) =>
          setSkillData({ ...skillData, description: e.target.value })
        }
      />
      {/* Input field for image upload */}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      <button onClick={handleSubmit}>Add Skill</button>
    </div>
  );
};

export default SkillForm;
