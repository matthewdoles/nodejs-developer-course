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