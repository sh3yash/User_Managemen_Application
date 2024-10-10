import React from 'react';
import SplineBackground from '../components/SplineBackground'; // Adjust the import path as needed
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <SplineBackground /> {/* Spline background */}
      <div className="overlay-content">
        <h1>Welcome to the User Management Application</h1>
        <p>This application allows you to manage users easily. You can view, add, edit, and delete users as needed.</p>
        <p>Explore the features of this application by navigating to the User List.</p>
        <Link to="/users" className="user-list-button">Go to User List</Link>
      </div>
    </div>
  );
};

export default HomePage;
