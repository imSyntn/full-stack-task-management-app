const mongoose = require('mongoose')
const express = require('express')
const { registerUser, loginUser } = require('../Controller/userController')

const auth = express()

auth.route('/register').post(registerUser);
auth.route('/login').post(loginUser)

module.exports = { auth }