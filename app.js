const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// 1. Third-party logging middleware
app.use(morgan('tiny'));

// 2. Built-in JSON body parser
app.use(express.json());

// 3. Mount routers
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

// 4. Catch-all 404 handler (placed AFTER all route handlers)
app.use((req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

// 5. Start server (port 4000 to match your initial setup)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;