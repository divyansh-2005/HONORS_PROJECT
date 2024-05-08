// src/components/NavigationBar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; 
import './NavigationBar.css';

const NavigationBar = () => {
  const { user,signOut } = useContext(AuthContext); 
  const handleLogout = () => {
    signOut();
    window.location.href = '/signin';
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        {user && ( // Render these links only if user is logged in
          <>
            <li>
              <Link to="/user">Dashboard</Link>
            </li> 
            <li>
              <Link to="/user/create">Create Note</Link>
            </li>
            <li>
              <Link to="/user/notes">My Notes</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/notes">All Notes</Link>
        </li>
        {user && ( // Render logout button only if user is logged in
          <li>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
