import React, { useState } from "react";

import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

import icon from "../assets/Image/SVG/hamburger-md-svgrepo-com.svg";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const clickbutton = () => {
    setMobile((prev) => !prev);
  };
  return (
    <>
      <div className="main-navbar">
        <div className="navbar">
            <div>LuxeMart</div>
          <div className="middle-nav">
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          <div className="toggle-nav-btn">
            <div onClick={clickbutton} className="icon-image toogle-button">
              <img src={icon} alt="" />
            </div>
          </div>
          {mobile && (
            <div className="mobile-nav">
              <ul className="nav-ul">
                <li>
                  <Link to="/"></Link>
                </li>
                <li>
                  <Link to="/home" onClick={() => setMobile(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/product" onClick={() => setMobile(false)}>Product</Link>
                </li>
                <li>
                  <Link to="/cart" onClick={() => setMobile(false)}>Cart</Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMobile(false)}>About</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMobile(false)}>Contact</Link>
                </li>
                <li>
                  <Link to="/login" onClick={() => setMobile(false)}>Login</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
