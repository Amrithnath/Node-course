const express=require('express')
require("./db/mongoose")
const User= require('./models/user')
const Task = require('./models/task')

const app=express()
const port = process.env.PORT || 5000
app.use(express.json())

app.post('/users',(req,res)=>{
    const user=new User(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.post('/task',(req,res)=>{
    const task=new Task(req.body)
    task.save().then(()=>{
        res.send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})
app.listen(port,()=>{
    console.log("listening on "+port)
})
/**
 * Goal: Setup a task creation Endpoint
 * 
 * 
 * >Create a seperate file for the task model
 * >create the task creation endpoint
 * >test the endpoint from postman
 */