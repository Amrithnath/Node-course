const express=require('express')

const app=express()

app.get('',(req,res)=>{
    res.send('Hello Express!')
})
app.get('/help',(req,res)=>{
    res.send("Help Page")
})
app.listen(3000,()=>{
    console.log("Server is up on 3000")
})
/*
Challenge
1. Setup an about page and add page title
2.Setup a weather route and render page title
3.test it
*/