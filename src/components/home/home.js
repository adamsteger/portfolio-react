import React from "react";
import "./home.css";
import Profile from "../../assets/photo.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home">
      <div className="intro-container">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Adam Steger</span> <br /> Full Stack
          Developer
        </span>
        <p className="intro-extra">
          I enjoy creating websites and web apps, ones that are both visually
          pleasing and user-friendly.
        </p>
        <Link className="project-link">
          <button className="project-btn">View Projects</button>
        </Link>
      </div>
      <div className="profile-container">
        <img src={Profile} alt="Me" className="profile-pic" />
      </div>
    </section>
  );
};

export default Home;
