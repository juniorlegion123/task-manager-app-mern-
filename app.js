const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())

//routes
app.get('/hello',(req,res)=>{
    res.send('task manager app')
})
app.use('/api/v1/tasks', tasks)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, console.log('server is running onport 3000'))
        
    } catch (error) {
        console.log(error)
    }
}

start()