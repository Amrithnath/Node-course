const https=require('https')
const dotenv=require('dotenv')

dotenv.config()

Darksky_API_key = process.env.key
const url="https://api.darksky.net/forecast/"+Darksky_API_key+"/40,-75?units=si"

const request=https.request(url,(response)=>{
    let data=""
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
    })
    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
    })

})
request.on('error',(error)=>{
    console.log('error',error)
})

request.end()