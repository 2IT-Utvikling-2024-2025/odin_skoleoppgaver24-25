const express = require('express');
const {pool} = require('../data/db');

//GET
const getAllOrders = async(req, res) => {
    try {
        const [resoult] = await pool.execute('SELECT * FROM prodctdetail');

        res.status(200).json({success: true, data: resoult});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

//GET
const getOrderById = async (req, res) => {
    try {
    const [resoult] = await pool.execute(
        'SELECT * FROM productsdetail WHERE productDetailID = ?',
        [req.params.name]);

        res.status(200).json({success: true, data: resoult});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
    
}

const createOrder = async(req, res) => {
    try {
    Const [resoult1] = await pool.execute(
         'INSERT INTO products (OrderID, OrderDate, customer_CustomerID) VALUES (?, ?, ?)',
            [req.body.OrderID, req.body.OrderDate, req.body.customer_CustomerID]);

     Const [resoult2] = await pool.execute(
         'INSERT INTO productsDetail (ProductDetailID, ) VALUES (?, ?)',
            [req.body.ProductDetailID, req.body.ProductID]);
     
     res.status(200).json({success: true, data: resoult1});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}