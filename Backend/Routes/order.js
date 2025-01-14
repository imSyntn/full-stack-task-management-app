const express = require('express');
const { postOrders } = require('../Controller/orderController');

const orderRoute = express()

orderRoute.route('/').post(postOrders);

module.exports = { orderRoute }