const express = require('express');
const { pool } = require('../data/db');

//GET
const getAllOrders = async(req, res) => {
    try {
        const [resoult] = await pool.execute('SELECT * FROM `order`');

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
        'SELECT * FROM `order` WHERE orderID = ?',
        [req.params.id]);

        res.status(200).json({success: true, data: resoult});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
    
}

const createOrder = async(req, res) => {
    try {
    const [resoult1] = await pool.execute(
         'INSERT INTO `order` (orderID, productID, customerID, orderDate) VALUES (?, ?, ?,?)',
            [req.body.orderID, req.body.productID, req.body.customerID, req.body.orderDate]);
     
     res.status(200).json({success: true, data: resoult1});
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder
}