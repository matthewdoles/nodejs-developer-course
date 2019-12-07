const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

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

beforeEach(async () => {
    await User.deleteMany()
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

test('Should fetch user profile', async() => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${User1.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not fetch profile for unauthenticated user', async() => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete user account', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${User1.tokens[0].token}`)
        .send()
        .expect(200);
})

test('Should not delete user account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})
