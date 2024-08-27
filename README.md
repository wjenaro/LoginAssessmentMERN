# MERN Stack Application with Google Authentication

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application that features user authentication using Google OAuth 2.0. The app allows users to sign up, log in, and access protected routes through traditional signup or Google login.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)
6. [Application Features](#application-features)
7. [API Endpoints](#api-endpoints)
8. [Google OAuth Setup](#google-oauth-setup)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [License](#license)

## Project Structure

```plaintext
root
│
├── backend-API
│   ├── controllers
│   ├── models
│   ├── node_modules
│   ├── Passport
│   │   └── passport-setup.js
│   ├── Routers
│   │   ├── profile.js
│   │   └── userAuth.js
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── client
│   ├── node_modules
│   ├── public
│   ├── src
│   └── .env
│
├── .gitignore
├── .eslint.config.js
├── index.html
├── README.md
└── package.json
### Explanation:

- **backend-API**: Contains all backend-related files, including server configuration, route handling, and database models.
  - **Passport**: Folder containing Passport.js configuration for Google OAuth.
  - **Routers**: Contains route definitions for profile management and user authentication.
  - **.env**: Environment variables specific to the backend.
  - **server.js**: Main server file that starts the Express server.

- **client**: Contains all frontend-related files.
  - **src**: The source directory where your React components and other client-side logic reside.
  - **.env**: Environment variables specific to the client.

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **.eslint.config.js**: ESLint configuration file for code linting.
- **index.html**: Entry point for the client application.
- **README.md**: This documentation file.
- **package.json**: Contains dependencies and scripts for both backend and frontend.
## Technologies Used

### Frontend:
- React
- Axios (for HTTP requests)
- Google OAuth SDK

### Backend:
- Node.js
- Express
- MongoDB (via Mongoose)
- Passport.js (for Google OAuth 2.0)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/mern-google-auth-app.git
cd mern-google-auth-app
# For backend
cd backend-API
npm install

# For client
cd ../client
npm install


Running the Application
Start the backend server:
bash
Copy code
cd backend-API
npm start
Start the frontend development server:
bash
Copy code
cd ../client
npm start
Access the application:
Open your browser and navigate to http://localhost:5173.

Application Features
User Authentication:
Traditional email/password signup and login.
Login with Google using OAuth 2.0.
Protected Routes:
Access certain routes only after logging in.
Profile Management:
Users can view and manage their profile after logging in.
API Endpoints
User Authentication
POST /api/signup - User signup with email, username, and password.
POST /api/login - User login with email and password.
GET /auth/google - Redirects to Google OAuth for authentication.
GET /auth/google/callback - Google OAuth callback route.
Profile
GET /profile - Fetches the authenticated user's profile data.
Google OAuth Setup
Create a Google Cloud Project:
Visit the Google Cloud Console.
Create a new project.
Enable the "Google+ API" for the project.
Create OAuth 2.0 Credentials:
Go to the "Credentials" section.
Create OAuth 2.0 credentials with the following:
Authorized Redirect URIs: http://localhost:4000/auth/google/callback
Copy the Client ID and Client Secret to the .env files.
Integrate in the Code:
Use the Client ID and Client Secret in your Node.js server and React client as shown above.

Deployment
Frontend:
The frontend can be deployed on platforms like Netlify, Vercel, or any static site hosting service.

Backend:
The backend can be deployed on platforms like Heroku, AWS, DigitalOcean, or any cloud service that supports Node.js.

Environment Variables:
Ensure all environment variables are correctly set in the deployment environments.

Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any feature additions or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.


You can now copy this Markdown-formatted content into your `README.md` file in your GitHub repository.
