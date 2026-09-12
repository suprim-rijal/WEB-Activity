const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userrouter');
// Assuming carRouter already exists from the starter template
// const carRouter = require('./routes/carRouter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter);
// app.use('/api/cars', carRouter);

// Database Connection & Server Start
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/week4-activity';

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to DB & Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });