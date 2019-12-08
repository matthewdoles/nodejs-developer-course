const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { User1Id, User1, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Matthew Doles',
        email: 'matthew@example.com',
        password: 'blue12345'
    }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body.user.name).toBe('Matthew Doles')
    expect(response.body).toMatchObject({
        user: {
            name: 'Matthew Doles',
            email: 'matthew@example.com'
        },
        token: user.tokens[0].token
    })
    expect(user.passwords).not.toBe('blue12345')
})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: User1.email,
        password: User1.password
    }).expect(200)

    const user = await User.findById(response.body.user._id)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistant user or mistyped password', async () => {
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

    const user = await User.findById(User1Id)
    expect(user).toBeNull()
})

test('Should not delete user account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${User1.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(User1Id)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
    const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${User1.tokens[0].token}`)
        .send({
            name: 'Matthew Test'
        })
        .expect(200)

    const user = await User.findById(User1Id)
    expect(user.name).toEqual('Matthew Test')
})

test('Should not update invalid user fields', async () => {
    const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${User1.tokens[0].token}`)
        .send({
            location: 'Tampa'
        })
        .expect(400)
})