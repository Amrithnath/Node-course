const request = require('request')
const fs=require('fs')
const dotenv = require('dotenv');
const geoCode=require('./utils/Geocode')
dotenv.config();

Darksky_API_key=process.env.key
geoCode('Bangalore',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
}
)
const DARKURL="https://api.darksky.net/forecast/"+Darksky_API_key+"/37.8267,-122.4233?units=si"
// request({url:DARKURL, json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to reach Darksky 404")
//     }
//     else if(response.body.code==400){
//         console.log("400 Error "+response.body.error)
//     }
//     else{
//         temp=response.body.currently["temperature"]
//         rainP=response.body.currently["precipProbability"]
//         console.log(response.body.daily.data[0].summary+"It is currently "+temp+" degrees Celsius outside and there is a "+rainP+"% chance of rain")
//     }
// }
// )
