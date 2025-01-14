const mongoose = require('mongoose')

const orderSchame = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true })

const orderModel = mongoose.model('orderModel', orderSchame)

module.exports = { orderModel }