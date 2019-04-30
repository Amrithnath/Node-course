const request = require('request')
const fs=require('fs')
const dotenv = require('dotenv');

dotenv.config();

API_key=process.env.key


const URL="https://api.darksky.net/forecast/"+API_key+"/37.8267,-122.4233"

request({url:URL, json:true},(error,response)=>{
    temp=response.body.currently["temperature"]
    rainP=response.body.currently["precipProbability"]
    console.log("It is currently "+temp+" degrees outside and there is a "+rainP+" chance of rain")
}
)