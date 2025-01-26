const mysql = require('mysql2');

// Create a connection pool (recommended for performance)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog_db'
});

// Use the pool to get a connection
const getConnection = (callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return callback(err, null);
    }
    callback(null, connection);
  });
};

module.exports = { getConnection };
