const path=require('path')
const express=require('express')
const hbs=require('hbs')

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
    res.render({
        Forecast:"It is currently 30 degrees celsius with a 0% chance of rain",
        location:"bangalore"
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"404 page",
        error404:"404 help article not found",
        name:"Amrithnath Vijayakumar"
    })
})

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