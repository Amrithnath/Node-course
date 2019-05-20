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
    },
    password:{
        type: String,
        required:true,
        trim:true,
        validate(value){
            console.log(value)
            if(value.length<7 || value.includes('password')){
                throw new Error("password should be greater than 6 characters and should not be password")
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
    name:"Amrithnath   ",
    email:"arjun.amrith@gmail.com  ",
    age:25,
    password:"amrithnath94"
})

me.save().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
