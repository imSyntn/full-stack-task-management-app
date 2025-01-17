const { menuModel } = require('../Model/menuModel')


const getItem = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(406).json({ msg: "Id is not available" }) 
        }
        const item = await menuModel.findById(id)
        if(item) {
            return res.status(200).json(item) 
        }
        return res.status(400).json({ msg: 'Item not available.' })    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Error occured.' })
    }
}

const getAllMenus = async (req, res) => {
    try {
        const allMenus = await menuModel.find({})
        return res.status(200).json({ data: allMenus })
    } catch (error) {
        return res.status(500).json({ msg: 'Error occured.' })
    }
}

const postMenu = async (req, res) => {
    try {
        const { name, category, price, availability, image } = req.body;

        if (!name || !price) {
            return res.status(406).json({
                msg: 'Name or price is required.'
            })
        }

        const menu = await menuModel.create({ name, price, availability, category, image });

        return res.status(200).json(menu)

    } catch (error) {
        return res.status(500).json({ msg: 'Error occured.' })
    }
}


const updateMenu = async (req, res) => {
    try {
        const { name, category, price, availability, image } = req.body;
        const id = req.params.id;
        const isAvailable = await menuModel.findById(id)
// console.log('id',id)
// console.log({ name, category, price, availability, image })
        if (!isAvailable) {
            return res.status(406).json({ msg: 'Id not valid.' })
        }

        const updates = {}
        
        if(name) updates.name = name;
        if(category) updates.category = category;
        if(price) updates.price = price;
        if(availability) updates.availability = availability;
        if(image) updates.image = image;

        const update = await menuModel.findByIdAndUpdate(id, updates)

        if(update) {
            return res.status(200).json({
                id: update.id,
                updated: true
            })
        }
    } catch (error) {
        return res.status(500).json({ msg: 'Error occured.' })
    }
}


const deleteMenu = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteMenu = await menuModel.findByIdAndDelete(id)

        if(deleteMenu) {
            return res.status(200).json({ deleted: true })
        } else {
            return res.status(400).json({ deleted: false })
        }
    } catch (error) {
        return res.status(500).json({ msg: 'Error occured.' })
    }
}


module.exports = { getAllMenus, postMenu, updateMenu, deleteMenu, getItem }