const request = require('request')
const fs=require('fs')
const dotenv = require('dotenv');

dotenv.config();

API_key=process.env.key


const URL="https://api.darksky.net/forecast/"+API_key+"/37.8267,-122.4233"

request({url:URL},(error,response)=>{
    console.log(response)
}
)