import React from 'react';

import "../CSS/SimplePage.css"
import { Link } from 'react-router-dom';

const SimplePage = () => {
  return (
    <div className="main-container">

      <div class="intro-container">
    <h1>Welcome to <span>LuxeMart</span></h1>
    <p>Discover your perfect makeup look</p>
    <Link to="/login">
    <a href="" class="btn">Explore Now</a>
    </Link>
  </div>
    </div>
  )
}

export default SimplePage