const Task = require('../models/Task')
const Tasks = require('../models/Task')

const getAllTasks = (req, res)=>{
    res.send('getAllTasks from the file')
}
const createTask = async(req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const getTask = (req, res)=>{
    res.json({id:req.params.id})
}
const updateTask = (req, res)=>{
    res.send('update Tasks')
}
const deleteTask= (req, res)=>{
    res.send('delete Tasks')
}


module.exports={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}

// const studentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     tech: {
//         type: String,
//         required: true
//     },
//     sub: {
//         type: Boolean,
//         required: true,
//         default: false
//     }
// })

// module.exports = mongoose.model('student', studentSchema)