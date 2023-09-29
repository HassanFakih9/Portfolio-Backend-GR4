import React from 'react';

const LinkedInImage = () => {
  const linkedinUrl = "https://www.linkedin.com/in/laylaAboSaad/";

  return (
    <div className="social-container">
    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
      <img src="./images/linkedin.png" alt="LinkedIn" />
    </a>
    </div>
  );
};

export default LinkedInImage;