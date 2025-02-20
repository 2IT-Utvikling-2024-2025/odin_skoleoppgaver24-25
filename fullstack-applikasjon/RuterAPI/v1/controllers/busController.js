const express = require('express');

//GET
const getAllBuses = (req, res) => {
    res.send('Get all buses');
}

const getBusById = (req, res) => {
    res.send('Get Bus by id');
}


//POST
const createBus = (req, res) => {
    res.send('Create Bus');
}


//PUT
const updateBus = (req, res) => {
    res.send('Update Bus');
}


//DELETE
const deleteBus = (req, res) => {
    res.send('Delete Bus');
}


module.exports = {
    getAllBuses,
    getBusById,
    createBus,
    updateBus,
    deleteBus,
}