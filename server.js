const express = require('express')
require('dotenv').config()

const workoutRoute = require('./routes/workouts.routes')

//express app
const app = express()

//routes
app.use('/api/workouts',workoutRoute)

// app.get('/', (req,res) => {
//     res.json({mssg:'welcome to the app'})
// })

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//listen for requires
app.listen(process.env.PORT, () => {
    console.log('listen on port',process.env.PORT)
})