import React from "react";
import ContactImage from "../assets/contact-image.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftContent"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightContent">
        <h1>Contact Us</h1>
        <form id="contactForm" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea rows="5" placeholder="Enter message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
