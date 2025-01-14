const jwt = require('jsonwebtoken')

const genToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

const varifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { genToken, varifyToken }