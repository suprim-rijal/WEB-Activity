const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/productControllers');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// Public routes (anyone can view)
router.get('/', getAllProducts);
router.get('/:productId', getProductById);

// Protected routes (require login token)
router.use(requireAuth);

router.post('/', createProduct);
router.delete('/:productId', deleteProduct);
router.put('/:productId', updateProduct);

module.exports = router;