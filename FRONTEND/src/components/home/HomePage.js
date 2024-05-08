// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import "../home/HomePage.css"
import logoImg from '../../assets/LOGO.png';

const HomePage = () => {
  return (
    <div className="desktop">
      <div className="container">
        <div className="text-wrapper">NOTIFY</div>
        <img className="LOGO" alt="Logo" src={logoImg} />
        <div className="nav-links">
          <Link className="link" to="/notes">NOTES</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
