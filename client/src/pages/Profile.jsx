import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace this URL with the actual endpoint for fetching user data
        const response = await axios.get('http://localhost:4000/api/profile', {
          withCredentials: true // To send cookies with the request
        });
        setUser(response.data);
      } catch (err) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Profile</h2>
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <p className="form-control-plaintext">{user.username}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <p className="form-control-plaintext">{user.email}</p>
              </div>
              {/* Add more user fields here as needed */}
              <div className="text-center">
                <a href="/logout" className="btn btn-danger">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
