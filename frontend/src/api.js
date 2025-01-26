const apiUrl = 'http://localhost:3000';

// Register User
export const registerUser = (data) => {
  return fetch(`${apiUrl}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

// Login User
export const loginUser = (data) => {
  return fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        // Store token in localStorage or sessionStorage
        localStorage.setItem('token', data.token);
      }
      return data;
    });
};

// Function to get the token from localStorage (to use in headers for protected routes)
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Example of a fetch function with token authorization (for protected routes)
export const getPosts = () => {  // Renamed from fetchPosts to getPosts
  const token = getAuthToken();
  return fetch(`${apiUrl}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Attach token to the request header
    },
  }).then((response) => response.json());
};

// Function to create a new post (requires authentication)
export const createPost = (postData) => {
  const token = getAuthToken();
  return fetch(`${apiUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Attach token to the request header
    },
    body: JSON.stringify(postData),
  }).then((response) => response.json());
};
