const request = require('request')
const fs=require('fs')
const dotenv = require('dotenv');
dotenv.config()

Mapbox_API_key=process.env.Mapbox
const geoCode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token="+Mapbox_API_key+"&limit=1"

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location server',undefined)
        }
        else if(!body.features){
            callback('unable to find location, please try another query',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[0],
                longitude:body.features[0].center[1],
                location:body.features[0].place_name
            })
        }
    })
}

module.exports=geoCode