//CRUD operations


// const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
// const ObjectID=
const {
    MongoClient,
    ObjectID
} = require('mongodb')

const connectionurl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionurl, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('unable to connect to DB')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({
    //     name: 'Yvette'
    // }, (error, response) => {
    //     if (error) console.log("Couldnt find said user")
    //     console.log(response)
    // })
    // db.collection('users').find({
    //     age: 25
    // }).toArray((error, users) => {
    //     if (error) console.log("Couldnt fin users matching criteria")
    //     console.log(users)
    // })
    // db.collection('users').find({
    //     age: 25
    // }).count((error, count) => {
    //     if (error) console.log("Couldnt fin users matching criteria")
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({
    //     _id: new ObjectID("5cdec618fb182e3c9c57f95b")
    // }, (error, task) => {
    //     if (error) console.log("please check your _id")
    //     console.log(task)
    // })
    // db.collection('tasks').find({
    //     completed: false
    // }).toArray((error, tasks) => {
    //     if (error) console.log("Hurray not Incomplete tasks")
    //     console.log(tasks)
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5cdec8b689aafe4e4491ed40")
    // }, {
    //     $inc:{
    //         age:1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('users').deleteMany({
    //     age:48
    // }).then((Response)=>{
    //     console.log(Response.deletedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description:"make food"
    }).then((result)=>{
        console.log(result.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })
})

/*
    challenge 
    Goal Use delete one to remove a task

    1. Grab the description of the task you want to delete
    2. setup the call with a deleteone query to delete the task above
    3. use promises with success or error handlers
    4. test
*/