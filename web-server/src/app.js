const path=require('path')
const express=require('express')

const app=express()

//define path for express config
const publicpath=path.join(__dirname,'../Public')
const viewsPath=path.join(__dirname,'../templates')

//setup handlebar for viewsengine
app.set('view engine','hbs')
app.set('views',viewsPath)
//setup static directory serve
app.use(express.static(publicpath))

app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather App",
        name:"Amrithnath"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help Section",
        helptext:"This is very helpful",
        name:"Amrithnath Vijayakumar"
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