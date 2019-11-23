require('./src/db/mongoose')
const User = require('./src/models/user')

User.findByIdAndUpdate('5dd6d6ac75d4e17380013587', { age: 24 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 24 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})