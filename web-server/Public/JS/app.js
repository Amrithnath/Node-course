
fetch('http://localhost:3000/weather?address=bosonsdaskasd').then((response)=>{
    console.log(response)
    response.json().then((data)=>{
        if(data.error){
            error=data.error
            console.log(data.error)
        }
        else{
            console.log(data)
        }
    })
})  