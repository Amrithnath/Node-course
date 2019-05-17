//CRUD operations


const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionurl='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionurl,{useNewUrlParser : true},(error,client)=>{
    if(error){
        return console.log('unable to connect to DB')
    }

    const db=client.db(databaseName)

//     db.collection('users').insertOne({
//         name:'amrithnath',
//         age:25
//     },(error,result)=>{
//         if (error) console.log("Unable to insert user")
//         console.log(result.ops)
//     })
//
    db.collection('users').insertMany([
        {
            name:"Yvette",
            age:25
        },
        {
            name:"Yvonne",
            age:48
        }
    ],(error,response)=>{
        if(error) console.log("Unable to insert documents")
        console.log(response.ops)
    })
})