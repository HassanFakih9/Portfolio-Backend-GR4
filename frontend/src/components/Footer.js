import React from 'react';
import "./footer.css";
import DownloadButton from "./DownloadButton";
import GitHubLink from "./GitHubLink";
import LinkedInImage from "./LinkedInImage";

const Footer = () => {
  return (
    <>
      <DownloadButton />
      <p className="p1">Get in touch</p>
      <GitHubLink />
      <LinkedInImage />
      <p className="p2">Copyright &copy; 2023 All rights reserved Developed by Group 4</p>

   
    </>
  );
};

export default Footer;
