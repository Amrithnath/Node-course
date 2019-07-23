require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndRemove('5ce2b244059e3e3974f24520').then((task)=>{
    console.log(task)
    return Task.countDocuments()
}).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})