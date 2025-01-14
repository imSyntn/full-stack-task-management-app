const mongoose = require('mongoose')

const menuSchame = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    }
})

const menuModel = mongoose.model('menuModel', menuSchame)

module.exports = { menuModel }