const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db');
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter);

// Connect to DB and Start Server
const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});