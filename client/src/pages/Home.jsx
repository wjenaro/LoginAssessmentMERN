import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Home() {
  // Inline styles for the home container
  const homeContainer = {
    height: '75vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div style={homeContainer} className="container">
      {/* Main Heading */}
      <h2 className="mb-4">Welcome!</h2>

      {/* Subheading for the username or user greeting */}
      <h3 className="mb-5">Username</h3>

      {/* Navigation Links styled with Bootstrap classes */}
      <div className="d-flex justify-content-around w-50">
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
        <span>|</span>
        <Link to="/login" className="btn btn-secondary">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Home;
