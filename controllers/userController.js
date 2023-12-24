const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async(req,res) =>{

    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please fill all the fields')
    }
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    }else{
        res.status(400)
        throw new Error('User not registered')
    }


})
const loginUser = asyncHandler(async(req,res) =>{

    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    }else{
        res.status(400)
        throw new Error('Incorrect user data')
    }

})
const getUser = asyncHandler(async(req,res) =>{
    

})

const generateToken = (id) =>{
    return jwt.sign(
        {id},
        process.env.JWT_TOKEN,{
        expiresIn: '30d'
        }
        )
}





module.exports = {
    registerUser,
    loginUser,
    getUser,


}