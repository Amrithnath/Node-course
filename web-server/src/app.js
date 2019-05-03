const express=require('express')

const app=express()

app.get('',(req,res)=>{
    res.send('<h1>Hello Express!</h1>')
})
app.get('/help',(req,res)=>{
    res.send('<h1>Help</h1>')
})
app.get('/about',(req,res)=>{
    res.send("<h1>About page</h1>")
})
app.get('/weather',(req,res)=>{
    res.send({
        Forecast:"It is currently 30 degrees celsius with a 0% chance of rain",
        location:"bangalore"
    })
})



app.listen(3000,()=>{
    console.log("Server is up on 3000")
})
