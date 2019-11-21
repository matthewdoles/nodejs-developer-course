// CRUD - create, read, update, delete
const { MongoClient, ObjectID }  = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect: ' + error)
    }
    
    const db = client.db(databaseName)
    db.collection('users').updateOne({
        _id: new ObjectID('5dd436a41056021869392b55')
    }, {
        $set: {
            name: 'Mike'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').updateOne({
        _id: new ObjectID('5dd436a41056021869392b55')
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // Challenge: Use updateMany to complete all tasks
    //
    // 1. Check the doucmentation for updateMany
    // 2. Setup the call with the query and the updates
    // 3. Use promise methods to setup the success/error handlers
    // 4. Test you work

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
})