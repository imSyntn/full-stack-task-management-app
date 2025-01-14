const express = require('express')

const ordersRoute = express()


ordersRoute.route('/').get();

module.exports = { ordersRoute }