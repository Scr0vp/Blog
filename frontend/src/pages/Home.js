import React, { useState, useEffect } from 'react';
import { getPosts } from '../api'; // API call function

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await getPosts();
      setPosts(response);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
