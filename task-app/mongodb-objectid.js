// destructuring mongodb
const { MongoClient, ObjectID }  = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
console.log(id.toHexString())

MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect: ' + error)
    }
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        _id: id,
        name: 'John',
        age: 26
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user: ' + error)
        }

        console.log(result.ops)
    })
})