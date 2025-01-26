const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const { getConnection } = require('./includes/db');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
