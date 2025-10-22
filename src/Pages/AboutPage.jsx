import React from "react";

import "../CSS/AboutPage.css";

import member1 from "../assets/Image/JPG/smiling-manager-photo.jpg";
import member2 from "../assets/Image/JPG/happysmilephoto.jpg";
import member3 from "../assets/Image/JPG/young-man-photo.jpg";
export const AboutPage = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-container">
          {/* <div className="about-image">
            <img src={aboutimage} alt="About Us" />
          </div> */}

          <div className="about-content">
            <h2>About ShopEase</h2>
            <p>
              Welcome to <strong>ShopEase</strong>, your one-stop destination
              for a seamless online shopping experience. We offer a wide range
              of products from fashion, electronics, home essentials to daily
              needs, all in one place.
            </p>
            <p>
              Our mission is to make shopping easy, reliable, and enjoyable for
              everyone. With fast delivery, secure payments, and 24/7 customer
              support, we aim to be your favorite online store.
            </p>

            <h3>Our Mission</h3>
            <p>
              To provide a fast, safe, and enjoyable shopping experience with a
              wide range of products and unbeatable customer service.
            </p>

            <h3>Our Vision</h3>
            <p>
              To become the most trusted online shopping app that connects
              millions of customers to quality products every day.
            </p>

            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-box">
          <h3>500K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h3>50K+</h3>
          <p>Products Available</p>
        </div>
        <div className="stat-box">
          <h3>100+</h3>
          <p>Brands</p>
        </div>
        <div className="stat-box">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p className="team-intro">
          Our passionate team works tirelessly to bring you the best shopping
          experience.
        </p>

        <div className="team-container">
          <div className="team-card">
            <div className="team-img">
              <img src={member1} alt="Team Member" />
            </div>
            <div className="team-info">
              <h3>Justin </h3>
              <p className="role">CEO</p>
              <p>
                Rohit leads ShopEase with a vision to simplify online shopping
                and make it accessible for everyone.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-img">
              <img src={member2} alt="Team Member" />
            </div>
            <div className="team-info">
              <h3>Jean</h3>
              <p className="role">CTO</p>
              <p>
                Anita oversees the technical infrastructure, ensuring the app
                runs smoothly and securely.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-img">
              <img src={member3} alt="Team Member" />
            </div>
            <div className="team-info">
              <h3>Kwan</h3>
              <p className="role">Head of Marketing</p>
              <p>
                Vikram strategizes campaigns to bring our products to customers
                efficiently and creatively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
