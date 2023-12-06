import React from "react";
import "./projects.css";
import Algorithm from "../../assets/algorithm.png";
import GateGuard from "../../assets/gate-guard (2).png";
import Form from "../../assets/simple-form.png";
import Internship from "../../assets/internship.png";
import DesignPattern from "../../assets/design-pattern.png";
import Network from "../../assets/network.png";
import Computation from "../../assets/computation.png";
import Portfolio from "../../assets/front-end.png";

const Projects = () => {
  return (
    <section id="projects">
      <span className="projects-title title">My Projects</span>
      <p className="projects-description">
        My coding projects I have worked on through coursework and in my
        personal time.
      </p>
      <div className="project-cards">
        <div className="project-card">
          <img src={GateGuard} alt="Gate Guard Icon" className="project-img" />
          <div className="project-description">
            <h2 className="project-name">Gate Guard</h2>
            <p className="project-text">
              <strong>Web application</strong> for an electronic pass manager
              for gated communities. In this project, I contributed to the
              backend of the webapp, where I helped design the architecture and
              database schemas.
            </p>
            <a
              href="https://github.com/adamsteger/Adam-Steger-Portfolio/tree/main/LifesABit"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">Java / Spring Boot / PostgreSQL</i>
          </div>
        </div>
        <div className="project-card">
          <img src={Portfolio} alt="Portfolio icon" className="project-img" />
          <div className="project-description">
            <h2 className="project-name">Personal Website</h2>
            <p className="project-text">
              This portfolio website was written in <strong>ReactJS.</strong>
            </p>
            <a
              href="https://github.com/adamsteger/portfolio-react"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">ReactJS / HTML / CSS</i>
          </div>
        </div>
        <div className="project-card">
          <img src={Algorithm} alt="Algorithm Icon" className="project-img" />
          <div className="project-description">
            <h2 className="project-name">Algorithms</h2>
            <p className="project-text">
              Implementations of four different algorithms including{" "}
              <strong>quicksort</strong>, creating a <strong>heap</strong> using
              the bottom-up algorithm, <strong>Horspool's</strong> algorithm,
              and <strong>Floyd's</strong> algorithm.
            </p>
            <a
              href="https://github.com/adamsteger/Adam-Steger-Portfolio/tree/main/algorithms"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">C++</i>
          </div>
        </div>

        <div className="project-card">
          <img src={Form} alt="Form Icon" className="project-img form" />
          <div className="project-description">
            <h2 className="project-name">Angular Form</h2>
            <p className="project-text">
              Simple, <strong>responsive</strong> form I made during my
              internship at Swampfox Technologies. This form calls an{" "}
              <strong>API</strong> to initiate a phone call.
            </p>
            <a
              href="https://github.com/adamsteger/Adam-Steger-Portfolio/tree/main/simple-form"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">Angular / Typescript / Bootstrap</i>
          </div>
        </div>
        <div className="project-card">
          <img src={Internship} alt="Internship icon" className="project-img" />
          <div className="project-description">
            <h2 className="project-name">UrTern</h2>
            <p className="project-text">
              Developed a student application to search for internship listings
              and create a resume profile. Employers create profiles and post
              internship opportunities. Students apply with their resume to
              internships, as well as leave reviews for companies.
            </p>
            <a
              href="https://github.com/adamsteger/Adam-Steger-Portfolio/tree/main/internship"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">Java / JSON / JUnit</i>
          </div>
        </div>
        <div className="project-card">
          <img
            src={DesignPattern}
            alt="Design Patterns Logo"
            className="project-img"
          />
          <div className="project-description">
            <h2 className="project-name">Design Patterns</h2>
            <p className="project-text">
              Various design patterns: <strong>adapter</strong>,{" "}
              <strong>decorator</strong>, <strong>factory</strong>,{" "}
              <strong>iterator</strong>, <strong>singleton</strong>,{" "}
              <strong>state</strong>, and <strong>strategy</strong>. Provided
              with a driver and UML class diagram, I completed the code to make
              it usable and efficient.
            </p>
            <a
              href="https://github.com/adamsteger/Adam-Steger-Portfolio/tree/main/designpatterns"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">Java</i>
          </div>
        </div>
        <div className="project-card">
          <img src={Network} alt="Network Icon" className="project-img" />
          <div className="project-description">
            <h2 className="project-name">Group Chat</h2>
            <p className="project-text">
              A local client/server group chat application that utilizes{" "}
              <strong>threads</strong> connects multiple users together to
              send/receive messages over the console.{" "}
            </p>
            <a
              href="https://github.com/adamsteger/Adam-Steger-Portfolio/tree/main/networks/GroupChat"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">Java</i>
          </div>
        </div>
        <div className="project-card">
          <img
            src={Computation}
            alt="Computation Icon"
            className="project-img"
          />
          <div className="project-description">
            <h2 className="project-name">Computation</h2>
            <p className="project-text">
              This features a program to remove epsilon transitions from an{" "}
              <strong>NFA</strong>, as well as a program to simulate a{" "}
              <strong>NFA</strong> for a given string input.{" "}
            </p>
            <a
              href="https://github.com/adamsteger/Adam-Steger-Portfolio/tree/main/computation"
              target="_blank"
            >
              Repository
            </a>
            <i className="project-lang">Java</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
