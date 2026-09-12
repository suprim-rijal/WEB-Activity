const userModel = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  const users = userModel.getAllUsersData();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users }
  });
};

exports.createUser = (req, res) => {
  const users = userModel.getAllUsersData();
  const newUser = req.body;
  
  users.push(newUser);
  userModel.saveUsersData(users);

  // 201 Created Status Code
  res.status(201).json({
    status: 'success',
    data: { user: newUser }
  });
};

exports.deleteUser = (req, res) => {
  // 204 No Content Status Code
  res.status(204).send();
};