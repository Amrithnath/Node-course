const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:2717/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const Task = mongoose.model('Tasks',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        required:false,
        default:false
    }
})
