const path=require('path')
const express=require('express')
const hbs=require('hbs')

const forecast=require('../utils/Weather')
const geocode=require('../utils/Geocode')

const app=express()

//define path for express config
const publicpath=path.join(__dirname,'../Public')
const viewsPath=path.join(__dirname,'../templates/views')
const partials=path.join(__dirname,'../templates/partials')
const _404=path.join(__dirname,'../templates/views/404.hbs')

//setup handlebar for viewsengine
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partials)

//setup static directory serve
app.use(express.static(publicpath))

app.get('/',(req,res)=>{
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
    if(!req.query.address){
        error="Please input a valid location"
        return res.send({error})
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast({latitude,longitude},(error,{summary,temperature,rainP,uvindex,humidity,visibility,windSpeed})=>{
            if(error){
                return res.send({error})
            }
            return res.send({'given':req.query.address,location,summary,forecast:`Its currently ${temperature} degrees celsius outside and there is a ${rainP}% chance of rain. With a wind speed of ${windSpeed} and humidity ${humidity}. The visibility is ${visibility} with a uvindex of ${uvindex}`})
        })  
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"404 page",
        error404:"404 help article not found",
        name:"Amrithnath Vijayakumar"
    })
})

/*
Challenge

Goal:Wire up weather

1. require geocode/forecast into app.js
2. use the address to geocode
3. use the coordinates to get the forecast
4. send back the real forecast and location
*/

app.get('*',(req,res)=>{
    res.render('404',{
        name:"Amrithnath Vijayakumar",
        error404:"404 Page not found",
        title:"404 Page"
    })
})

app.listen(3000,()=>{
    console.log("Server is up on 3000")
})