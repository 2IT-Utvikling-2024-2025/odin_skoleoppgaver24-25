const express = require('express');

//GET
const getAllRouts = (req, res) => {
    res.send('Get all routs');
}

const getRoutById = (req, res) => {
    res.send('Get rout by id');
}


//POST
const createRout = (req, res) => {
    res.send('Create rout');
}


//PUT
const updateRout = (req, res) => {
    res.send('Update rout');
}


//DELETE
const deleteRout = (req, res) => {
    res.send('Delete rout');
}


module.exports = {
    getAllRouts,
    getRoutById,
    createRout,
    updateRout,
    deleteRout,
}