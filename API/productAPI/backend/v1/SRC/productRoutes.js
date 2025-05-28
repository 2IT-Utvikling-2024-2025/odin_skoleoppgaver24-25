const express = require('express');
const {pool} = require('./db');

const {getProducts, getProductById, createProduct, deleteProduct} = require('./productController');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
module.exports = router;