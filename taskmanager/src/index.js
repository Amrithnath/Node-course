const express=require('express')
require("./db/mongoose")
const User= require('./models/user')
const {ObjectID}  = require('mongodb')  
const Task = require('./models/task')

const app=express()
const port = process.env.PORT || 5000
app.use(express.json())

app.post('/users',async(req,res)=>{
    const user=new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send()
    }
})

app.get('/tasks',async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }
})

app.get('/tasks/:id', async(req,res)=>{
    const _id=req.params.id

    if (!ObjectID.isValid(_id)) {         
        return res.status(404).send();     
    }
    try {
        
        const task = await Task.findById(_id)
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
})

app.get('/users',async(req,res)=>{
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send()
    }
})

app.get('/users/:id',async(req,res)=>{
    const _id=req.params.id
    try {
        const user = await User.findById(_id)
        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})

app.post('/task',async(req,res)=>{
    const task=new Task(req.body)
    try {    
        const saved = await task.save()
        res.status(201).send(task)
       
    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(port,()=>{
    console.log("listening on "+port)
})