import React from 'react';
import { FaGithub } from 'react-icons/fa';

function GitHubLink() {
  const githubProfileURL = 'https://github.com/laylaabosaad';

  return (
    
    <div className="social-container">
       <p className="p1">Get in touch</p>
    <a href={githubProfileURL} target="_blank" rel="noopener noreferrer">
      <FaGithub /> GitHub
    </a>
    </div>
  );
}

export default GitHubLink;