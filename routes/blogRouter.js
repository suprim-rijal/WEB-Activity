const express = require('express');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  replaceBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.put('/:id', replaceBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;