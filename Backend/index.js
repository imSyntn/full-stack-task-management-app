const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const dotENV = require('dotenv').config()
const cors = require('cors')

const { auth } = require('./Routes/Auth')
const { menuRoute } = require('./Routes/MenuRoutes')
const { orderRoute } = require('./Routes/order')
const { ordersRoute } = require('./Routes/orders')
const { restrictToUser } = require('./Middleware/cookieVarify')

const app = express()

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Database connected.')).catch(e => console.log(e))

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('HI.')
})

app.use('/', auth)
app.use('/menu', menuRoute)
app.use('/order', restrictToUser, orderRoute)
app.use('/orders', restrictToUser, ordersRoute)

app.listen(5000, () => console.log('Server started...'))