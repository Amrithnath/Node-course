
fetch('http://localhost:3000/weather?address=bosonsdaskasd').then((response)=>{
    console.log(response)
    response.json().then((data)=>{
        if(data.error){
            error=data.error
            console.log({error})
        }
        else{
            console.log(data)
        }
    })
})


const weatherform = document.querySelector('form')
const search = document.querySelector('input')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location)
})