import React from "react";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

function GitHubLink() {
  const githubProfileURL = "https://github.com/laylaabosaad";

  return (
    <div className="social-container">
      <a href={githubProfileURL} className="github" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default GitHubLink;
