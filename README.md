# Blog Web Application

## Overview
This project is a blog platform where users can create, edit, and delete blog posts. It integrates with a backend built with Node.js and uses MongoDB as the database for storing and retrieving blog data. The platform allows users to manage their posts, view a list of posts they’ve read so far, and provides a markdown editor to enhance post creation.

### Tech Stack:
- **Frontend**: JavaScript (React)
- **Backend**: Node.js, Express
- **Database**: MongoDB (or SQL as an alternative)
- **Authentication**: JWT (JSON Web Tokens)
- **Editor**: Markdown editor for post creation
- **File Upload**: Support for header image uploads for blog posts

## Features:
- **User Authentication**: Users can sign up, log in, and manage sessions.
- **Blog Post Management**: Users can create, edit, and delete blog posts.
- **Post List**: Display all posts a user has read so far.
- **Responsive Design**: The application is fully responsive and adapts to various screen sizes.
- **Markdown Editor**: A markdown editor allows users to create well-structured blog posts.
- **Header Images**: Users can upload header images for their blog posts.

## Project Structure

/blog_app
├── /assets
│   ├── /css
│   │   └── style.css          # CSS file 
│   ├── /js
│   │   └── app.js             # Frontend JS (
│   └── /images
│       └── logo.png           # Logo / static images
├── /backend
│   ├── /controllers
│   │   ├── authController.js  # Handle user authentication (login, register)
│   │   └── postController.js  # Handle CRUD operations for blog posts
│   ├── /models
│   │   ├── userModel.js       # MySQL model for users
│   │   └── postModel.js       # MySQL model for blog posts
│   ├── /routes
│   │   ├── authRoutes.js      # Define authentication routes (login, register)
│   │   └── postRoutes.js      # Define routes for creating, reading, updating posts
│   ├── /includes
│   │   ├── db.js              # MySQL database connection setup
│   │   └── auth.js            # Authentication-related helper functions
│   ├── /config
│   │   └── config.js          # Store environment variables (e.g., JWT secret, DB credentials)
│   └── server.js              # Entry point for your backend (Express server)
├── /frontend
│   ├── /public
│   │   ├── index.html         # Main HTML file for React
│   │   └── favicon.ico        # Favicon for the app
│   ├── /src
│   │   ├── /components
│   │   │   ├── Header.js      # Header component 
│   │   │   ├── PostList.js    # List all blog posts
│   │   │   ├── PostForm.js    # Form for creating/editing blog posts
│   │   │   ├── LoginForm.js   # Login form
│   │   │   ├── RegisterForm.js # Registration form
│   │   │   └── Dashboard.js   # User dashboard component
│   │   ├── /pages
│   │   │   ├── Home.js        # Home page (with posts listed)
│   │   │   ├── LoginPage.js   # Login page
│   │   │   └── RegisterPage.js # Registration page
│   │   ├── App.js             # Main React component that handles routing
│   │   ├── index.js           # Entry point for React (renders App.js)
│   │   ├── api.js             # API functions (for interacting with the backend)
│   │   └── styles.css         # Global styles (optional)
├── .gitignore                # Git ignore file
├── package.json              # Project metadata, dependencies, scripts
└── README.md                 # Project documentation


## Setup and Installation

### Prerequisites:
- **Node.js**: Install Node.js (https://nodejs.org/)
- **MongoDB**: Set up MongoDB locally or use MongoDB Atlas for a cloud database.

### Backend Setup:
1. Navigate to the `backend` directory.
2. Install backend dependencies:
   ```bash
   npm install
3. Set up MongoDB connection in the db.js file. (You can use either a local MongoDB instance or MongoDB Atlas).
4. Run the backend server:
    node server.js (The server will be running on http://localhost:3000)

## Frontend Setup:
1. Navigate to the frontend directory.
2. Install frontend dependencies:
    npm install
3. Start the React development server:
    npm start (The frontend will be running on http://localhost:3000.)

## API Endpoints
- Authentication
* /auth/register
. Method: POST
. Description: Register a new user.
. Request Body:
    {
  "username": "user",
  "email": "user@example.com",
  "password": "yourPassword",
  "confirmPassword": "yourPassword"
    }
. Response:
    {
  "message": "User created successfully",
  "userId": 1
    }

- /auth/login
. Description: Log in a user.
. Request Body:
    {
  "email": "user@example.com",
  "password": "yourPassword"
    }
. Response:
    {
  "token": "JWT_TOKEN_HERE"
    }
## Posts
. Method: GET
. Description: Get all blog posts.
. Response:
    [
  {
    "id": 1,
    "title": "Sample Post",
    "content": "This is a sample post",
    "createdAt": "2022-01-01",
    "author": "user"
  },
  ...
]
* /posts
. Method: POST
. Description: Create a new blog post.
. Request Body:
    {
  "title": "New Post",
  "content": "This is the content of the new post",
  "image": "url-to-header-image"
    }
. Response:
    {
  "message": "Post created successfully",
  "postId": 1
}

## Features and Milestones:
_ Authentication: Users can register, log in, and use JWT for session management.
_ CRUD Operations on Posts: Users can create, read, update, and delete their blog posts.
_ Markdown Editor: Built-in markdown editor for creating formatted posts.
_ Responsive Design: Optimized UI for different devices (desktop, tablet, mobile).
_ Image Upload: Support for uploading header images for posts.
## Error Handling
- 400 Bad Request: Missing required fields in the request.
- 401 Unauthorized: Invalid credentials or token.
- 404 Not Found: Resource not found (e.g., post does not exist).
- 500 Internal Server Error: Server-side issues (e.g., database errors).
## Future Enhancements
+ Implement search functionality for blog posts.
+ Add user roles for different permissions (admin, editor).
+ Enable comments and reactions on blog posts.
+ Improve error handling with more specific messages.


