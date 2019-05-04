
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


/*
Challenge

Goal:use the input value to get the weather

1. Migrate the fetch call to the submit function
2. Use search text as the address query string value
3.submit form with a valid and invalid value to test
*/