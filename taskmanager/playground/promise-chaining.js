require('../src/db/mongoose')
const User= require('../src/models/user')


// 5ce2b9df0eeed13790d12232


User.findByIdAndUpdate('5ce2b9df0eeed13790d12232',{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((results)=>{
    console.log(results)
}).catch((e)=>{
    console.log(e)
})