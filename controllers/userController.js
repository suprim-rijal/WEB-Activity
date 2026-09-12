const User = require('../models/userModel');
const mongoose = require('mongoose');

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users", error: error.message });
  }
};

// GET a single user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user", error: error.message });
  }
};

// CREATE a new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create({ ...req.body });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Invalid input", error: error.message });
    } else {
      res.status(500).json({ message: "Failed to create user", error: error.message });
    }
  }
};

// PUT (Complete replacement using findOneAndReplace)
const replaceUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const updatedUser = await User.findOneAndReplace({ _id: id }, req.body, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Invalid input", error: error.message });
    } else {
      res.status(500).json({ message: "Failed to replace user", error: error.message });
    }
  }
};

// PATCH (Partial update using findOneAndUpdate)
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Invalid input", error: error.message });
    } else {
      res.status(500).json({ message: "Failed to update user", error: error.message });
    }
  }
};

// DELETE a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const deletedUser = await User.findOneAndDelete({ _id: id });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
};