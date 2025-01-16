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
    },
    image: {
        type: String,
        default: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'
    }
})

const menuModel = mongoose.model('menuModel', menuSchame)

module.exports = { menuModel }