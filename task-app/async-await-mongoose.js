require('./src/db/mongoose')
const User = require('./src/models/user')

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5dd6d6ac75d4e17380013587', 24).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})