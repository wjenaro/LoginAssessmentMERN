import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  // Retrieve username from localStorage
  const username = localStorage.getItem('username');

  // Inline styles for the home container
  const homeContainer = {
    height: '75vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  // Determine the greeting message based on whether username exists
  const greetingMessage = username ? `Welcome back, ${username}!` : 'Welcome!';

  return (
    <div style={homeContainer} className="container">
      {/* Main Heading */}
      <h2 className="mb-4">{greetingMessage}</h2>

      {/* Navigation Links styled with Bootstrap classes */}
      <div className="d-flex justify-content-around w-50">
        {!username ? (
          <>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
            <span>|</span>
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
          </>
        ) : (
          <Link to="/profile" className="btn btn-info">
            View Profile
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
