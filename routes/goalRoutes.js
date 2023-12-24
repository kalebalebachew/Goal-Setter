const express = require('express')
const app = express()

const { getGoals,
        setGoal,
       updateGoal,
       deleteGoal} = require('../controllers/goalController')

app.route('/').get(getGoals).post(setGoal)
app.route('/:id').put(updateGoal).delete(deleteGoal)





module.exports = app