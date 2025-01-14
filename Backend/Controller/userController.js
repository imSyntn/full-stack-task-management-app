const bcrypt = require('bcrypt')
const { userModel } = require('../Model/userModel')
const { genToken } = require('../Utils/JWT')

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(406).json({
                msg: 'All fields are required.'
            })
        }

        const isAvailable = await userModel.findOne({ username: username })

        if (isAvailable) {
            return res.status(403).json({
                msg: 'User exist.'
            })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)

            await userModel.create({ username, password: hashedPassword })

            return res.status(200).json({ username })

        }
    } catch (error) {
        return res.status(500).json({
            msg: 'Error occured.'
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(406).json({
                msg: 'All fields are required.'
            })
        }

        const isAvailable = await userModel.findOne({ username: username })

        if (!isAvailable) {
            return res.status(403).json({
                msg: 'User does not exist.'
            })
        }

        const isValid = bcrypt.compare(password, isAvailable.password)

        if (!isValid) {
            return res.status(401).json({ msg: 'Wrong username or password.' })
        }

        const token = genToken(username)

        return res.status(200).cookie('deliveryAppToken', token, {
            httpOnly: false,
            secure: true,
            sameSite: 'None'
        }).json({ username, loggedIn: true })

    } catch (error) {
        return res.status(500).json({
            msg: 'Error occured.'
        })
    }
}

module.exports = { registerUser, loginUser }