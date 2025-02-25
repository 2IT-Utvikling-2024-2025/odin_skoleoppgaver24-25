const express = require('express');

const {pool} = require('../data/db');
//Next step is to change all these under to add async await.

const getAllProducts = async(req, res) => {
    try {
        //Query the database
        const [resoult] = await pool.query('SELECT * FROM products');
        //Response
        res.state(200).json({success: true, data: resoult});
    }
    catch (error) {
        res.state(500).json({success: false, message: error.message});
    }
}

const getProductByName = (req, res) => {
    res.send('Get product by name');
}

const createProduct = (req, res) => {
    res.send('Create product');
}

const updateProduct = (req, res) => {
    res.send('Update product');
}

const deleteProduct = (req, res) => {
    res.send('Delete product'); 
}

module.exports = { 
    getAllProducts,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
}   