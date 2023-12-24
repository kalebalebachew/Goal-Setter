const express = require('express')
const app = express()
const{  registerUser,
        loginUser,
        getUser,
        } = require('../controllers/userController')
const{ protect } = require('../middlewares/authMiddleware')

app.post('/',registerUser)
app.post('/login',loginUser)
app.get('/getme', protect, getUser)


module.exports = app