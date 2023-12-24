const express = require('express')
const app = express()

const { getGoals,
        setGoal,
       updateGoal,
       deleteGoal} = require('../controllers/goalController')
       const { protect } = require('../middlewares/authMiddleware')

app.route('/').get(protect, getGoals).post(protect, setGoal)
app.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)





module.exports = app