// postController.js
const { getConnection } = require('../includes/db');

// Get Blog Posts for a User
exports.getUserPosts = (req, res) => {
  const userId = req.params.userId;

  const query = 'SELECT * FROM posts WHERE user_id = ?';
  getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch posts' });
    }

    connection.query(query, [userId], (err, results) => {
      if (err) {
        connection.release(); 
        return res.status(500).json({ error: 'Failed to fetch posts' });
      }
      connection.release();
      res.json(results);
    });
  });
};

// Delete Blog Post
exports.deletePost = (req, res) => {
  const postId = req.params.postId;

  const query = 'DELETE FROM posts WHERE id = ?';
  getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete post' });
    }

    connection.query(query, [postId], (err, result) => {
      if (err) {
        connection.release(); // Release the connection
        return res.status(500).json({ error: 'Failed to delete post' });
      }
      connection.release();
      res.status(200).json({ message: 'Post deleted successfully' });
    });
  });
};
