const express = require('express');

//GET
const getAllTickets = (req, res) => {
    res.send('Get all Tickets');
}

const getTicketById = (req, res) => {
    res.send('Get Ticket by id');
}


//POST
const createTicket = (req, res) => {
    res.send('Create Ticket');
}


//PUT
const updateTicket = (req, res) => {
    res.send('Update Ticket');
}


//DELETE
const deleteTicket = (req, res) => {
    res.send('Delete Ticket');
}


module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
}