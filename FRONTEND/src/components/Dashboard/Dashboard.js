import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  // Access the user context
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h2 className="welcome-message">Welcome to Your Dashboard</h2>
      {user ? (
        <div className="user-info">
          {/* Display user-specific information */}
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>user Id: {user._id}</p>
        </div>
      ) : (
        <p>Please sign in to view your dashboard</p>
      )}
      <div className="manage-notes">
        
        <h3>Manage Notes</h3>
        <ul>
          <li><Link to='/user/create' >Create Notes</Link></li>
          <li><Link to='/user/notes' >View Notes</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
