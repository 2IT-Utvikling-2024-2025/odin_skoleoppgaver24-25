const express = require('express');
const { pool } = require('../data/db');

const { getAllProducts, getProductByName, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:name', getProductByName);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
module.exports = router;

