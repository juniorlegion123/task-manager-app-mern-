const express = require('express')
const router = express.Router()
const {getAllTask,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')
// const student = require('../controllers/tasks')

// router.get('/', async (req, res) => {
//     try {
//         await student.find()
//             .then(result => {
//                 res.json(result)
//             })

//     } catch (error) {
//         res.send('error' + error)
//     }
// }
// )

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router