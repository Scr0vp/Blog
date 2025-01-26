import React, { useState } from 'react';
import { createPost } from '../api'; // API call function
import './formStyles.css'; // Import the styles

const PostForm = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { title, content };
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('You must be logged in to create a post');
      setLoading(false);
      return;
    }

    try {
      const response = await createPost(data);
      setLoading(false);

      if (response.message === 'Post created successfully') {
        history.push('/home'); // Redirect after creating the post
      } else {
        setError(response.message || 'An error occurred');
      }
    } catch (err) {
      setLoading(false);
      setError('Failed to create post');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create Post</h2>
        {error && <div className="error">{error}</div>}
        <input 
          type="text" 
          placeholder="Post Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Post Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Post...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
