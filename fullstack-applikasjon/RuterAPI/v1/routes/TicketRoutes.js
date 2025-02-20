const express = require('express');

const { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket } = require('../controllers/TicketController');

const router = express.Router();

//Define Routes
router.get('/', getAllTickets);
router.get('/:id', getTicketById);
router.post('/', createTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

module.exports = router;