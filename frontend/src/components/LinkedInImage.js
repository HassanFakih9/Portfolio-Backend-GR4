
import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";

const LinkedInImage = () => {
  const linkedinUrl = "https://www.linkedin.com/in/laylaAboSaad/";

  return (
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="linkedin" />
      </a>
  );
};

export default LinkedInImage;

