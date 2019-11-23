require('./src/db/mongoose')
const Task = require('./src/models/task')

Task.findByIdAndDelete('5dd6f022b92cf20c995006d6').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})