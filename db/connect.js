const mongoose = require('mongoose')

const connectDB = (url)=>{
return mongoose
.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
}
module.exports = connectDB






// mongoose.set("strictQuery", false);
// MONGO_URL = 'mongodb://127.0.0.1:27017/to-do-list'
// mongoose.connect(MONGO_URL, { useNewUrlParser: true })

// const con = mongoose.connection

// con.on('error', err => console.log('connection failed'));
// con.on('connected', connected => console.log("connected with database"))

// con.on('open', function () {
//     console.log('connected to db...')
// })