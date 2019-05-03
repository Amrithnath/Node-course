const geoCode=require('./utils/Geocode')
const forecast=require('./utils/Weather')
if(process.argv[2]){
    city=process.argv[2]
}
else{
    return console.log("Please enter a valid name for location")
}
geoCode(city,(error,data)=>{
    if(error){
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, Fdata) => {
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(Fdata.summary+" It is currently "+Fdata.temp+"degree celsius outside and there is a "+Fdata.rainP+"% chance of rain")
    })
})




