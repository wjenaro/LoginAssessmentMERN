
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const username = localStorage.getItem('username');
  const isLoggedIn = !!username;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload(); // Refresh the page to update the navbar
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">MERN Assessment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-between w-100">
            {isLoggedIn ? (
              <>
                <span className="navbar-text me-2">Hello, {username}</span>
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary me-2">Login</Link>
                <Link to="/signup" className="btn btn-secondary">Signup</Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
