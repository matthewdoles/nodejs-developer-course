const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Matthew Doles',
        email: 'matthew@example.com',
        password: 'blue12345'
    }).expect(201)
})