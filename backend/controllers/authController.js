const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getConnection } = require('../includes/db');

/* User Registration */
exports.signup = (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Check if all required fields are provided
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Error hashing password' });
    }

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

    getConnection((err, connection) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      connection.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) {
          connection.release();  // Always release the connection back to the pool
          return res.status(500).json({ error: 'Error creating user' });
        }
        connection.release();  // Release the connection
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });
      });
    });
  });
};

/* User Login */
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = 'SELECT * FROM users WHERE email = ?';
  
  getConnection((err, connection) => {
    if (err) {
      console.error('Database connection error:', err);  // Log the connection error
      return res.status(500).json({ error: 'Database error' });
    }

    connection.query(query, [email], (err, results) => {
      if (err) {
        console.error('Error during SQL query execution:', err);  // Log the SQL query error
        connection.release();
        return res.status(500).json({ error: 'Error fetching user' });
      }

      if (results.length === 0) {
        console.log('No user found with email:', email);  // Log if no user found
        connection.release();
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const user = results[0];

      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error('Error during password comparison:', err);  // Log comparison error
          connection.release();
          return res.status(500).json({ error: 'Error comparing passwords' });
        }

        if (!isMatch) {
          console.log('Password mismatch for email:', email);  // Log password mismatch
          connection.release();
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

        connection.release();
        return res.status(200).json({ token });
      });
    });
  });
};
