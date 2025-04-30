const express = require('express');
const { pool } = require('../data/db');

const{ getAllOrders, getOrderById, createOrder} = require('../controllers/orderController');

const router = express.Router();


router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);
module.exports = router;

