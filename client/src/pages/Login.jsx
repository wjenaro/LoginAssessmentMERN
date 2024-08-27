import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import { GoogleLogin } from '@react-oauth/google'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password
      });

      // Save the token to localStorage
      localStorage.setItem('token', response.data.token);

      setSuccess('Login successful');
      setError('');
    } catch (err) {
      setError('Invalid credentials');
      setSuccess('');
    }
  };

  const handleGoogleSuccess = async (response) => {
    // Handle Google login response here
    console.log('Google login successful:', response);

    try {
      const result = await axios.post('http://localhost:4000/api/auth/google', {
        id_token: response.credential
      });

      // Save the token to localStorage
      localStorage.setItem('token', result.data.token);

      setSuccess('Login successful');
      setError('');
    } catch (err) {
      setError('Google login failed');
      setSuccess('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Login</h2>
              <hr/>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <hr/>
              <div className="text-center">
                <p>Or login with:</p>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={(error) => {
                    console.error('Google login error:', error);
                    setError('Google login failed');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
