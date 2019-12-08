const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

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

const User2Id = new mongoose.Types.ObjectId()
const User2 = {
    _id: User2Id,
    name: 'Test User 2',
    email: 'testuser2@example.com',
    password: 'waffle539!',
    tokens: [{
        token: jwt.sign({ _id: User2Id }, process.env.JWT_SECRET)
    }]
}

const Task1 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First Task',
    owner: User1Id
}

const Task2 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second Task',
    completed: true,
    owner: User1Id
}

const Task3 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third Task',
    completed: false,
    owner: User2Id
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(User1).save()
    await new User(User2).save()
    await new Task(Task1).save()
    await new Task(Task2).save()
    await new Task(Task3).save()
}

module.exports = {
    User1Id,
    User1,
    User2Id,
    User2,
    Task1,
    Task2,
    Task3,
    setupDatabase
}