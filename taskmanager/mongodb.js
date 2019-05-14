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

    db.collection('users').insertOne({
        name:'amrithnath',
        age:25
    })
})