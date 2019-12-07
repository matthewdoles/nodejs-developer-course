const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const User1 = {
    name: 'Test User 1',
    email: 'testuser1@example.com',
    password: '87apple!'
}

beforeEach(async () => {
    await User.deleteMany({})
    await new User(User1).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Matthew Doles',
        email: 'matthew@example.com',
        password: 'blue12345'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: User1.email,
        password: User1.password
    }).expect(200)
})

test('Should not login nonexistant user', async () => {
    await request(app).post('/users/login').send({
        email: User1.email,
        password: User1.password + 'fail'
    }).expect(400)
})