import React from "react";
import { FaGithub } from "react-icons/fa";
import "./GitHubLink.css";
import "./footer.css";

function GitHubLink() {
  const githubProfileURL = "https://github.com/laylaabosaad";

  return (
    <div className="social-container">
      <a href={githubProfileURL} target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
    </div>
  );
}

export default GitHubLink;
