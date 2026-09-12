const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', replaceUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;