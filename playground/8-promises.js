const doworkpromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve([1,2,3])
        reject( "Things went wrong")
    },2000)
})

doworkpromise.then((result)=>{
    console.log("success")
    console.log(result)
}).catch((error)=>{
    console.log(error)
})