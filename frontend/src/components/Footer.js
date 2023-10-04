import React from 'react';
import "./footer.css";
import DownloadButton from "./DownloadButton";
import GitHubLink from "./GitHubLink";
import LinkedInImage from "./LinkedInImage";
import Phone from "./Phone";

const Footer = () => {
  return (
    <>
    <DownloadButton />
    <div className='outer-container'>
    <p className="p1">Get in touch :)</p>
    <div className="social-container">
      <GitHubLink />
      <LinkedInImage />
      <Phone />
    </div>
    <p className="p2">Copyright &copy; 2023 All rights reserved Developed by Group 4</p>
    </div>
   
    </>
  );
};

export default Footer;
