const mongoose = require('mongoose')

const userSchama = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('userModel', userSchama)

module.exports = { userModel }