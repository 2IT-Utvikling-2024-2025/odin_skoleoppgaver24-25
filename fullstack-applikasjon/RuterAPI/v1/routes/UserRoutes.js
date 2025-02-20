const express = require('express');

const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/UserController');

const router = express.Router();

//Define Routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;