import React, { useRef } from "react";
import "./contact.css";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rys19yg",
        "template_p6z44ef",
        form.current,
        "hlHE2HrmO3CWGtYO5"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <span className="title contact-title">Contact Me</span>
      <span className="contact-description">
        Please fill out this form to contact me for opportunities or any
        questions you may have!
      </span>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          className="name"
          placeholder="Your Name"
        />
        <input
          name="your_email"
          type="email"
          className="email"
          placeholder="Your Email"
        />
        <textArea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="msg"
        ></textArea>
        <button
          type="submit"
          value="Send"
          className="contact-container submit-button"
        >
          Submit
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/adamjsteger/" target="_blank">
            {" "}
            <img src={LinkedIn} alt="LinkedIn Icon" className="link" />
          </a>
          <a href="https://github.com/adamsteger" target="_blank">
            {" "}
            <img src={GitHub} alt="GitHub Icon" className="link" />
          </a>
          <a href="https://www.instagram.com/adamsteger/" target="_blank">
            <img src={Instagram} alt="Instagram Icon" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
