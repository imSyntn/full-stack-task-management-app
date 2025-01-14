const express = require('express')

const orderRoute = express()



orderRoute.route('/').post();

module.exports = { orderRoute }