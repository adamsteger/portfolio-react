import React from "react";
import "./skills.css";
import ReactIcon from "../../assets/react.png";
import Angular from "../../assets/angular.png";
import Javascript from "../../assets/javascript.png";
import Typescript from "../../assets/typescript.png";
import SCSS from "../../assets/scss.png";
import Java from "../../assets/java.png";
import C from "../../assets/c++.png";
import Postgre from "../../assets/postgre.png";
import MySQL from "../../assets/mysql.png";
import Git from "../../assets/git.png";
import Jira from "../../assets/jira.png";
import SpringBoot from "../../assets/spring.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="title">Technologies & Skills</span>
      <p className="frontend-text">Frontend technologies</p>
      <div className="grid frontend-grid">
        <div className="block">
          <img src={ReactIcon} alt="React Logo" className="block-img" />
          <p className="label">ReactJS</p>
        </div>
        <div className="block">
          <img src={Angular} alt="Angular Logo" className="block-img" />
          <p className="label">Angular</p>
        </div>
        <div className="block">
          <img src={Javascript} alt="Javascript Logo" className="block-img" />
          <p className="label">Javascript</p>
        </div>
        <div className="block">
          <img src={Typescript} alt="Typescript Logo" className="block-img" />
          <p className="label">Typescript</p>
        </div>
        <div className="block">
          <img src={SCSS} alt="SCSS Logo" className="block-img" />
          <p className="label">SCSS</p>
        </div>
      </div>
      <p className="backend-text">Backend/Other technologies</p>
      <div className="grid backend-grid">
        <div className="block">
          <img src={Java} alt="Java Logo" className="block-img" />
          <p className="label">Java</p>
        </div>
        <div className="block">
          <img src={C} alt="C++ Logo" className="block-img" />
          <p className="label">C++</p>
        </div>
        <div className="block">
          <img src={Postgre} alt="PostgreSQL Logo" className="block-img" />
          <p className="label">PostgreSQL</p>
        </div>
        <div className="block">
          <img src={MySQL} alt="MySQL Logo" className="block-img" />
          <p className="label">MySQL</p>
        </div>
        <div className="block">
          <img src={SpringBoot} alt="Spring Boot Logo" className="block-img" />
          <p className="label">Spring Boot</p>
        </div>
        <div className="block">
          <img src={Git} alt="Git Logo" className="block-img" />
          <p className="label">Git</p>
        </div>
        <div className="block">
          <img src={Jira} alt="Jira Logo" className="block-img" />
          <p className="label">Jira</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
