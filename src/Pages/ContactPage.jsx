import React from "react";
import "../CSS/ContactPage.css";
export const ContactPage = () => {
  return (
    <div className="main-container">
      <div className="contact-area">
        <div className="contact-box">
          <h2>Get in Touch</h2>

          <div className="input-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="input-group">
            <textarea placeholder="Your Message" rows="5"></textarea>
          </div>
          <div className="send-btn">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
