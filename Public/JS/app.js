function send(location){
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                error.textContent="Error: "+data.error
                message.textContent=""
            }
            else{
                error.textContent=data.location
                message.textContent=data.summary+" "+data.forecast
            }
        })
    })
}


const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const error= document.querySelector('#error')
const message = document.querySelector('#message')

weatherform.addEventListener('submit',(e)=>{
    var location=undefined
    e.preventDefault()
    if(search.value!=undefined){
        location = search.value
    }
    error.textContent="Loading..."
    message.textContent="Loading..."
    send(location)
})
