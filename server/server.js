//Express
const express = require('express');
const server = express ();

//Body Parser
const bodyParser = require('body-parser');

// DB Setup
const Sequelize = require('sequelize');
const { db_host, db_name, db_user, db_password, db_port } = require("../database/db_connection");
const db = new Sequelize(`mysql://${db_user}:${db_password}@${db_host}:${db_port}/${db_name}`);

//connection to the files where the routes are in it
const products = require('../routes/products.js');
const users = require('../routes/users');
const orders = require('../routes/orders');

//CORS
const cors = require('cors');

////////SERVER////////////////
//initialize the server
server.listen(3000, () => {
    const date = new Date();
    console.log("Server initialized " + date);
})
//general middlewares
server.use(bodyParser.json());

//CROS
server.use(cors({
    origin: '*'
}));

//routes handler
server.use('/products', products);
server.use('/users', users);
server.use('/orders', orders);


