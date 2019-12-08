const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')

const User1Id = new mongoose.Types.ObjectId()
const User1 = {
    _id: User1Id,
    name: 'Test User 1',
    email: 'testuser1@example.com',
    password: '87apple!',
    tokens: [{
        token: jwt.sign({ _id: User1Id }, process.env.JWT_SECRET)
    }]
}

const setupDatabase = async () => {
    await User.deleteMany()
    await new User(User1).save()
}

module.exports = {
    User1Id,
    User1,
    setupDatabase
}