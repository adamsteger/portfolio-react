import React from "react";
import "./experiences.css";
import Swampfox from "../../assets/swampfox-logo.jpg";
import USC from "../../assets/usc_logo.png";
import Duck from "../../assets/duckcreek-logo.jpg";
import UofSC from "../../assets/engineering.png";
import Gravatt from "../../assets/gravatt.jpg";
import Ally from "../../assets/ally.png";

const Experiences = () => {
  return (
    <section id="experiences">
      <span className="title">Education & Experiences</span>
      <p className="description">
        A list of professional experiences and my educational journey that has
        led me to where I am today.
      </p>
      <div className="card">
        <img src={Ally} alt="Ally Financial Logo" className="card-img" />
        <div className="card-text">
          <div className="card-title">
            <h2 className="card-title">Ally Financial</h2>
            <span className="date">Feb 2024 - Present</span>
          </div>
          <h3 className="position-title">Junior Full Stack Developer</h3>
          <p className="card-description">
            Service the Ally Credit Card on an agile and innovative serverless
            Cloud-based team. Provision dynamic IaC via Terraform AWS and wrote
            scripts in Python, Node, and Shell. Lead developer of a PCI-DSS
            Compliant ETL platform that services 20+ vendors and 200+ files
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src={USC}
          alt="University of South Carolina Logo"
          className="card-img"
        />
        <div className="card-text">
          <div className="card-title">
            <h2 className="card-title">South Carolina Honors College</h2>
            <span className="date">Aug 2020 - Dec 2023</span>
          </div>
          <h3 className="position-title">
            B.S. in Computer Science (GPA: 4.0)
          </h3>
          <p className="card-description">
            Excelled in coursework in Data Structures & Algorithms, Software
            Engineering, Algorithm Design I/II, Computer Networking, and
            Database System Design.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Swampfox} alt="Swampfox Logo" className="card-img" />
        <div className="card-text">
          <div className="card-title">
            <h2 className="card-title">Swampfox Technologies</h2>
            <span className="date">Sept 2023 - December 2023</span>
          </div>
          <h3 className="position-title">Software Developer Intern</h3>
          <p className="card-description">
            Develop GUI with test-driven development using Angular, Javascript,
            HTML5, and SCSS. Attach GUI to RESTful API and create reusable form
            components to be used across SF products.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src={Duck}
          alt="Duck Creek Technologies Logo"
          className="card-img"
        />
        <div className="card-text">
          <div className="card-title">
            <h2 className="card-title">Duck Creek Technologies</h2>
            <span className="date">May 2023 - Aug 2023</span>
          </div>
          <h3 className="position-title">Software Configuration Intern</h3>
          <p className="card-description">
            Participated in sprints to configure complex SaaS product to
            business requirements utilizing XML, XPath, Git, and Azure.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={UofSC} alt="" className="card-img" />
        <div className="card-text">
          <div className="card-title">
            <h2 className="card-title">
              USC College of Engineering and Computing
            </h2>
            <span className="date">Aug 2022 - May 2023</span>
          </div>
          <h3 className="position-title">
            Undergraduate Software Engineering Teaching Assistant
          </h3>
          <p className="card-description">
            Served as SCRUM Master for 7 teams of students developing a Java
            application. Lead one-on-one meetings with students to teach design
            patterns and Java fundamentals.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Gravatt} alt="Gravatt Logo" className="card-img gravatt" />
        <div className="card-text">
          <div className="card-title">
            <h2 className="card-title">Gravatt Camp and Conference Center</h2>
            <span className="date">May 2019 - Aug 2023</span>
          </div>
          <h3 className="position-title">Hospitality Director</h3>
          <p className="card-description">
            Managed ordering, planning, and organization of all meals for over
            250 campers and staff daily. Directly managed 6 kitchen assistants
            to delegate tasks and coordinate schedules.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
