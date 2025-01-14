const { orderModel } = require('../Model/orderModel')
const { menuModel } = require('../Model/menuModel')

const postOrders = async (req, res) => {
    try {

        const { reqItems } = req.body;
        const userId = req.jwtPayload?.id;

        const reqItemsIds = reqItems.map(item => item._id)

        const actualItems = await menuModel.find({ '_id': { $in: reqItemsIds } })

        const totalAmount = actualItems.reduce((sum, original)=> {
            const match = reqItems.find((item)=> item._id == original._id)

            if(!match) {
                return sum;
            }

            const quantity = match.quantity

            return (sum + (original.price * quantity))
        }, 0)

        await orderModel.create({userId, items: reqItems, totalAmount, status: "Completed"})

        return res.status(200).json({ price: totalAmount })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Error occured.' })
    }
}

const getOrders = async (req, res) => {
    try {
        const userId = req.jwtPayload?.id;

        const allOrders = await orderModel.find({userId})

        if(allOrders) {
            return res.status(200).json(allOrders)
        }

    } catch (error) {
        return res.status(500).json({ msg: 'Error occured.' })
    }
}

module.exports = { postOrders, getOrders }