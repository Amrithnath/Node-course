const request = require('request')
const fs=require('fs')
const dotenv = require('dotenv');
dotenv.config()
Darksky_API_key=process.env.key



const forecast=(lat,lon,callback)=>{
    const url="https://api.darksky.net/forecast/"+Darksky_API_key+"/"+encodeURIComponent(lon)+","+encodeURIComponent(lat)+"?units=si"
    
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Unable to access weather service please try again later",undefined)
        }
        else if(response.body.code==400){
            callback(response.body.error,undefined)
        }
        else{
            callback(undefined,{
                temp:response.body.currently["temperature"],
                rainP:response.body.currently["precipProbability"],
                summary:response.body.daily.data[0].summary

            })
        }
    })
}
module.exports=forecast
