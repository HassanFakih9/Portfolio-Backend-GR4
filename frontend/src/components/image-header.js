import React from "react";
//import myimage from "front-endg4/frontend/src/components/images/Screen Shot 2020-07-08 at 1.23.38 PM.png";
import "./header.css";
import img from "./myimage.png";
const TextImageSection = () => {
  return (
    <>
    <div>
      <h1 className="myName">Layla Abo Saad</h1></div>
      <div className="text-content">
        <p className="paragraph">
          I am a Full Stack Web Developer with a passion for building creative
          web applications. I am experienced in popular frameworks and libraries
          using React JS, Laravel, NodeJs, Wordpress, and more to create
          dynamic, user-friendly web applications, and deliver projects to a
          high standard. As an ambitious, hard-working, and a motivated
          individual, I aim to turn challenging ideas into reality.
        </p>
        <img
          src={img}
          alt="Layla Abo Saad"
          className="image-header text-image-section"
        />
      </div>
    </>
  );
};

//return (
// <section className="text-image-section">
// <div className="text">
//   <h2>{title}</h2>
// <p>{text}</p>
//   </div>
//  <div className="image">
//  <img src = '/Users/mohammadsafa/Desktop/Portfolio-Layla/backend-portfolio-gr4/frontend/portfolio/src/components/1679548125219.jpeg' alt="Your Image" />
//  </div>
// </section>
// );
//};

export default TextImageSection;
