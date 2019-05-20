const mongoose = require('mongoose')
const validator = require('validator')

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
            if(value.length<7 || value.toLowerCase().includes('password')){
                throw new Error("password should be greater than 6 characters and should not be password")
            }
        }
    }
})


module.exports=User