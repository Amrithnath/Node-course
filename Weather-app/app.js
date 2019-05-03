const geoCode=require('./utils/Geocode')
const forecast=require('./utils/Weather')
if(process.argv[2]){
    city=process.argv[2]
}
else{
    return console.log("Please enter a valid name for location")
}
geoCode(city,(error,{latitude,longitude,location})=>{
    if(error){
        return console.log(error)
    }
    forecast({latitude,longitude}, (error, Fdata) => {
        if(error){
            return console.log(error)
        }
        const {summary,temperature,rainP}=Fdata
        console.log(location)
        console.log(summary+" It is currently "+temperature+"degree celsius outside and there is a "+rainP+"% chance of rain")
    })
})




