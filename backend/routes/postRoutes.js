// postRoutes.js
const express = require('express');
const { getUserPosts, deletePost } = require('../controllers/postController');
const router = express.Router();

// Route to get the posts for a user
router.get('/:userId', getUserPosts);

// Route to delete a specific post
router.delete('/:postId', deletePost);

module.exports = router;
