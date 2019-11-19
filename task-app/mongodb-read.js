// destructuring mongodb
const { MongoClient, ObjectID }  = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect: ' + error)
    }
    const db = client.db(databaseName)

    db.collection('users').findOne({name: 'John'}, (error, user) => {
        if (error) {
            return console.log('Unable to find user: ' + error)
        }
        console.log(user)
    })

    db.collection('users').findOne({ _id: new ObjectID('5dd436a41056021869392b57') }, (error, user) => {
        if (error) {
            return console.log('Unable to find user: ' + error)
        }
        console.log(user)
    })

    db.collection('users').find({ age: 24 }).toArray((error, users) => {
        console.log(users)
    });

    db.collection('users').find({ age: 24 }).count((error, count) => {
        console.log(count)
    });

    // Challenge: Use find and findOne with tasks
    //
    // 1. Use findOne to fetch the last task by its id
    // 2. Use find to fetch all tasks that are not completed
    // 3. Test your work
    db.collection('tasks').findOne({ _id: new ObjectID('5dd436a41056021869392b5a') }, (error, task) => {
        if (error) {
            return console.log('Unable to find task: ' + error)
        }
        console.log(task)
    })
    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to find tasks: ' + error)
        }
        console.log(tasks)
    });
})