import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import ContactLogo from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src="" alt="logo" className='logo' /> */}
      <p className="name">Adam Steger</p>
      <div className="nav-container">
        <Link className="nav-list-item">Home</Link>
        <Link className="nav-list-item">Experiences</Link>
        <Link className="nav-list-item">About</Link>
        <Link className="nav-list-item">Projects</Link>
      </div>
      <button className="contact-container">
        <img src={ContactLogo} alt="Contact Icon" className="contact-icon" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
