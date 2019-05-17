//CRUD operations


// const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
// const ObjectID=
const {MongoClient,ObjectID}=require('mongodb')

const connectionurl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionurl, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('unable to connect to DB')
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({name:'Yvette'},(error,response)=>{
        if(error) console.log("Couldnt find said user")
        console.log(response)
    })
})