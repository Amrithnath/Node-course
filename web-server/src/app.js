const path=require('path')
const express=require('express')

const app=express()

app.use(express.static(path.join(__dirname,'../Public')))

app.use(express.static(path.join(__dirname,'../Public')))
app.use(express.static(path.join(__dirname,'../Public')))
app.get('/weather',(req,res)=>{
    res.send({
        Forecast:"It is currently 30 degrees celsius with a 0% chance of rain",
        location:"bangalore"
    })
})

app.listen(3000,()=>{
    console.log("Server is up on 3000")
})
