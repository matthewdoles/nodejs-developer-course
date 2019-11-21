// CRUD - create, read, update, delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect: ' + error)
    }
    
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Matthew',
        age: 24
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user: ' + error)
        }

        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'Bob',
            age: 33
        },
        {
            name: 'Steve',
            age: 27
        } 
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert users: ' + error)
        }

        console.log(result.ops)
    })

    // Challenge: I sert 3 tasks into a new tasks collection
    //
    // 1. Use insertMany to insert the documents
    //      -description (string), completed (boolean)
    // 2. Setup the callback to hand the error or print ops
    // 3. Run the script
    // 4. Refresh the database in Robo 3T and view data in tasks collection

    db.collection('tasks').insertMany([
        {
            description: 'Wash dishes',
            completed: true
        },
        {
            description: 'Take out trash',
            completed: false
        },
        {
            description: 'Do laundry',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks: ' + error)
        }

        console.log(result.ops)
    })
})