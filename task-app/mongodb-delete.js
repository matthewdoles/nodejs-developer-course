// CRUD - create, read, update, delete
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect: ' + error)
    }
    
    const db = client.db(databaseName)
    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // Challenge: use deleteOne to delete a task
    //
    // 1. Grab the description for the task you want to remove
    // 2. Setup the all with the query
    // 3. Use prmoise methods to sethup the success/error handlers
    // 4. Test your work

    db.collection('tasks').deleteOne({
        description: 'Take out trash'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})