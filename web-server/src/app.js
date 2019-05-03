const path=require('path')
const express=require('express')

const app=express()

app.use(express.static(path.join(__dirname,'../Public')))

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
/*
Challenge
Goal:Create Two more HTML files
1.Create a HTML page for about with about title
2.Create HTML page for help with help title
3.Remove old route handlers
4.Visit both in the browser
*/



app.listen(3000,()=>{
    console.log("Server is up on 3000")
})
