const mongoose  = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionURL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Matthew',
    age: 24
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})

// Challenge: Create a new model for tasks
//
// 1. Define the model with description and completed fields
// 2. Create a new instance of the model
// 3. Save the model to the database
// 4. Test your work!

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Take out the trash',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})