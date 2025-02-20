const express = require('express');

const { getAllBuses, getBusById, createBus, updateBus, deleteBus } = require('../controllers/BusController');

const router = express.Router();

//Define Routes
router.get('/', getAllBuses);
router.get('/:id', getBusById);
router.post('/', createBus);
router.put('/:id', updateBus);
router.delete('/:id', deleteBus);

module.exports = router;