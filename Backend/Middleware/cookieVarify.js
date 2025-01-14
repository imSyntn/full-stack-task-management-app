const { varifyToken } = require('../Utils/JWT')

const restrictToUser = (req, res, next) => {
    const Token = req.cookies?.deliveryAppToken;

    if(!Token) {
        return res.status(406).json({msg: 'Token not available.'})
    }

    const isValid = varifyToken(Token)

    if(Token && isValid) {
        req.jwtPayload = isValid;
        next()
    } else {
        return res.status(401).json({msg: 'User not valid.'})
    }
}

module.exports = {restrictToUser}