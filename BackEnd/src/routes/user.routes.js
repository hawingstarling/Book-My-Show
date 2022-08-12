const express = require('express')

const route = express.Router()

const authMiddleWare = require('../middleware/auth.middleware')
const userController = require('../controllers/user.controller')

route.get('/users', authMiddleWare.verifyToken ,userController.getAllUser)
route.delete('/delete/:id', userController.delete)

module.exports = route