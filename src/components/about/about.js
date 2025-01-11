import React from "react";
import WebDesign from "../../assets/web-design.png";
import Backend from "../../assets/backend.png";
import API from "../../assets/api.png";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <span className="title">About Me</span>
      <span className="description">
        I am a full stack developer with a strong passion for backend
        development. I specialize in designing and implementing serverless
        architectures that adhere to the microservice pattern in cloud
        environments, ensuring scalable and efficient solutions. While backend
        development is my forte, I also enjoy crafting intuitive and
        user-friendly front-end applications, delivering seamless experiences
        across the stack.
      </span>
      <div className="skill-cards">
        <div className="skill-card">
          <img
            src={Backend}
            alt="Backend Development"
            className="skill-card-img backend"
          />
          <div className="skill-card-text">
            <h2>Backend Development</h2>
            <p>
              I have experience analyzing the business needs of projects and
              designing architecture that is both correct and efficient. I have
              experience in developing serverless, non-relational database
              systems, as well as Object Oriented Design and relational database
              design.
            </p>
          </div>
        </div>
        <div className="skill-card">
          <img src={API} alt="API Development" className="skill-card-img" />
          <div className="skill-card-text api">
            <h2>API Development</h2>
            <p>
              I have experience in connecting the frontend and backend of
              applications through GraphQL and RESTful APIs. Through this I have
              learned how to store and transfer information from databases to
              the UI in an efficient manner.
            </p>
          </div>
        </div>
        <div className="skill-card">
          <img
            src={WebDesign}
            alt="Web Design"
            className="skill-card-img web"
          />
          <div className="skill-card-text">
            <h2>Web Design</h2>
            <p>
              I have experience analyzing user audiences and their needs and
              reflecting them in the design of websites and web applications. I
              pride myself in making websites that I would find intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
