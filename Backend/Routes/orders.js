const express = require('express');
const { getOrders } = require('../Controller/orderController');

const ordersRoute = express()

ordersRoute.route('/').get(getOrders);

module.exports = { ordersRoute }