const geoCode=require('./utils/Geocode')
const forecast=require('./utils/Weather')

geoCode('Bangalore',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})

forecast(77.59796, 12.9699, (error, data) => {
    console.log('Error', error)
    console.log(data.summary+" It is currently "+data.temp+"degree celsius outside and there is a "+data.rainP+"% chance of rain")
})


