const express = require('express');
const RoutRoutes = require('./v1/RoutRoutes');
const BusRoutes = require('./v1/BusRoutes');
const UserRoutes = require('./v1/UserRoutes');
const TicketRoutes = require('./v1/TicketRoutes');
const WalletRoutes = require('./v1/WalletRoutes');


const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Define Routes
app.use('/v1/routes', RoutRoutes);
app.use('/v1/buses', BusRoutes);
app.use('/v1/users', UserRoutes);
app.use('/v1/tickets', TicketRoutes);
app.use('/v1/wallets', WalletRoutes);



//Routes
app.listen(3000, () => 
    console.log('Server running on port 3000')
);
