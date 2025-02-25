const express = require('express');

const {pool} = require('../data/db');
//Next sted is to change all these under to add async await.

const getAllProducts = (req, res) => {
    res.send('Get all products');
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