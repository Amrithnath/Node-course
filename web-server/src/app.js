const path=require('path')
const express=require('express')

const app=express()
const publicpath=path.join(__dirname,'../Public')

app.use(express.static(publicpath))
app.set('view engine','hbs')

app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather App",
        name:"Amrithnath"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About me",
        name:"Amrithnath Vijayakumar"
    })
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
/*
Challenge
Goal : Create a HBS template for help page

1. Setup help template to render the help message to the screen
2. Setup the help route and render the help template with an example message 
3. visit and verify the routes
*/