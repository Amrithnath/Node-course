const request = require('request')
const fs=require('fs')
const dotenv = require('dotenv');

dotenv.config();

Darksky_API_key=process.env.key
Mapbox_API_key=process.env.Mapbox
const location="Bangalore"
var coord=[]

const MAPURL="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token="+Mapbox_API_key+"&limit=1"

request({url:MAPURL, json:true},(error,response)=>{
    if(error){
        console.log("404 Maps API is currently unavailable")
    }
    else if(!response.body.features){
        console.log("Please give a valid location Error 400")
    }
    else{
        coord=[response.body.features[0].geometry.coordinates[1],response.body.features[0].geometry.coordinates[0]]
        console.log(coord)
    }
})
const DARKURL="https://api.darksky.net/forecast/"+Darksky_API_key+"/37.8267,-122.4233?units=si"
request({url:DARKURL, json:true},(error,response)=>{
    if(error){
        console.log("Unable to reach Darksky 404")
    }
    else if(response.body.code==400){
        console.log("400 Error "+response.body.error)
    }
    else{
        temp=response.body.currently["temperature"]
        rainP=response.body.currently["precipProbability"]
        console.log(response.body.daily.data[0].summary+"It is currently "+temp+" degrees Celsius outside and there is a "+rainP+"% chance of rain")
    }
}
)