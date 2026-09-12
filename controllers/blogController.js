const Blog = require('../models/blogModel');
const mongoose = require('mongoose');

// GET all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blogs", error: error.message });
  }
};

// GET a single blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog", error: error.message });
  }
};

// CREATE a new blog
const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({ ...req.body });
    res.status(201).json(newBlog);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Invalid input", error: error.message });
    } else {
      res.status(500).json({ message: "Failed to create blog", error: error.message });
    }
  }
};

// PUT (Complete replacement)
const replaceBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    // findOneAndReplace replaces the entire document with the new body data
    const updatedBlog = await Blog.findOneAndReplace({ _id: id }, req.body, { new: true, runValidators: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Invalid input", error: error.message });
    } else {
      res.status(500).json({ message: "Failed to replace blog", error: error.message });
    }
  }
};

// PATCH (Partial update)
const updateBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true, runValidators: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Invalid input", error: error.message });
    } else {
      res.status(500).json({ message: "Failed to update blog", error: error.message });
    }
  }
};

// DELETE a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const deletedBlog = await Blog.findOneAndDelete({ _id: id });
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(deletedBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error: error.message });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  replaceBlog,
  updateBlog,
  deleteBlog,
};