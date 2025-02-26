const express = require('express');
const {pool} = require('../data/db');

//GET
const getAllProducts = async(req, res) => {
    try {
        const [resoult] = await pool.execute('SELECT * FROM products');

        res.status(200).json({success: true, data: resoult});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

//GET
const getProductByName = async (req, res) => {
    try {
    const [resoult] = await pool.execute(
        'SELECT * FROM products WHERE productName = ?',
        [req.params.name]);

        res.status(200).json({success: true, data: resoult});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
    
}

//POST
const createProduct = async(req, res) => {
    try {
        const [resoult] = await pool.execute(
            'INSERT INTO products (productName, productPrice) VALUES (?, ?)',
            [req.body.name, req.body.price])

        res.status(200).json({success: true, data: resoult});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

//PUT
const updateProduct = async(req, res) => {
    try {
        const [resoult] = await pool.execute(
            'UPDATE products SET productName = ?, productPrice = ? WHERE productId = ?',
            [req.body.name, req.body.price, req.params.id]);

        if (resoult.affectedRows === 0) {
            res.status(404).json({success: false, error: 'Product not found'});
        }
        else {
            res.status(200).json({success: true, data: resoult});
        }
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

//DELETE
const deleteProduct = async(req, res) => {
    try {
        const [resoult] = await pool.execute(
            'DELETE FROM products WHERE productId = ?',
            [req.params.id]);

        if (resoult.affectedRows === 0) {
            res.status(404).json({success: false, error: 'Product not found'});
        }
        else {
            res.status(200).json({success: true, data: resoult});
        }
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}


module.exports = { 
    getAllProducts,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
}   