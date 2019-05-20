const express=require('express')
require("./db/mongoose")
const User= require('./models/user')
const {ObjectID}  = require('mongodb')  
const Task = require('./models/task')

const app=express()
const port = process.env.PORT || 5000
app.use(express.json())

app.post('/users',(req,res)=>{
    const user=new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/tasks/:id',(req,res)=>{
    const _id=req.params.id
    if (!ObjectID.isValid(_id)) {         
        return res.status(404).send();     
    }
    Task.findById(_id).then((task)=>{
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/users/:id',(req,res)=>{
    const _id=req.params.id
    if (!ObjectID.isValid(_id)) {         
        return res.status(404).send();     
    }
    User.findById(_id).then((user)=>{
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.post('/task',(req,res)=>{
    const task=new Task(req.body)
    task.save().then(()=>{
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})


app.listen(port,()=>{
    console.log("listening on "+port)
})