const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)



app.listen(port, () => console.log(`server running on port ${port}`))