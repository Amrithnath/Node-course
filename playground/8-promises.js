// import { rejects } from "assert";

// const doworkpromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve([1,2,3])
//         reject( "Things went wrong")
//     },2000)
// })

// doworkpromise.then((result)=>{
//     console.log("success")
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const add =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}
// add(1,2).then((ans)=>{
//     console.log(ans)
//     add(ans,5).then((sum)=>{
//         console.log(sum)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e)
// })

add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})