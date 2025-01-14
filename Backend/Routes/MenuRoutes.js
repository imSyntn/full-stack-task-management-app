const express = require('express')
const { getAllMenus, postMenu, updateMenu, deleteMenu } = require('../Controller/menuController')

const menuRoute = express()

 menuRoute.route('/').get(getAllMenus);
 menuRoute.route('/').post(postMenu);
 menuRoute.route('/:id').put(updateMenu);
 menuRoute.route('/:id').delete(deleteMenu)

module.exports = { menuRoute }