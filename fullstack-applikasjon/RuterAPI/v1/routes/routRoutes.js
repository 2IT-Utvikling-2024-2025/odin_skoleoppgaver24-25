const express = require('express');

const { getAllRouts, getRoutById, createRout, updateRout, deleteRout } = require('../controllers/RoutsController');

const router = express.Router();

//Define Routes
router.get('/', getAllRouts);
router.get('/:id', getRoutById);
router.post('/', createRout);
router.put('/:id', updateRout);
router.delete('/:id', deleteRout);

module.exports = router;