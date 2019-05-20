const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:2717/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const User = mongoose.model('User', {
    name: {
        type: String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Provide valid email")
            }
        }    
    },
    age: {
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error("Age must be a positive number")
            }
        }
    }
})

const Task = mongoose.model('Tasks',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

// const task=new Task({
//     description:"Water plants",
//     completed:true
// })

// task.save().then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)

const me = new User({
    name:"Amrithnath    ",
    email:"Arjun.amrith@gmail.com  ",
    age:25
})

me.save().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})