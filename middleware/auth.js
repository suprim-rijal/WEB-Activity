// middleware/auth.js
const auth = (req, res, next) => {
  // Checks if query parameter contains admin=true (e.g., ?admin=true)
  if (req.query.admin === 'true') {
    next(); // Proceed to the route handler
  } else {
    res.status(401).json({
      status: 'fail',
      message: 'Unauthorized. Admin access required.'
    });
  }
};

module.exports = auth;