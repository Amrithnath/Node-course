require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('5ce2b244059e3e3974f24520').then((task)=>{
    console.log(task)
    return Task.countDocuments()
}).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})


/*

    Use Async/awwait

        create delete task count as a async function
            accept id of task to remove
        use await to delete tasks and count up incomplete tasks
        return count
        call function and attach then/catch to log results
        test

*/