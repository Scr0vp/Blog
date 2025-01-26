import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Use this hook for navigation
import { loginUser } from '../api'; // API call function
import './formStyles.css'; // Import the styles

const LoginForm = ({ setAuthToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory(); // Use the useHistory hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email, password };

    try {
      const response = await loginUser(data);
      setLoading(false);

      if (response.token) {
        localStorage.setItem('authToken', response.token);
        setAuthToken(response.token); // To store token in state (optional)
        history.push('/dashboard'); // Redirect to the dashboard
      } else {
        setError(response.message || 'An error occurred');
      }
    } catch (err) {
      setLoading(false);
      setError('Failed to login');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
