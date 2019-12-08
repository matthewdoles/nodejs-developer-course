const request = require('supertest')
const Task = require('../src/models/task')
const app = require('../src/app')
const { 
    User1Id, 
    User1, 
    User2Id, 
    User2, 
    Task1,
    Task2,
    Task3,
    setupDatabase 
} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${User1.tokens[0].token}`)
        .send({
            description: 'Test Task 1'
        })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toBe(false)
})

test('Should fetch tasks for authenticated user', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${User1.tokens[0].token}`)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)
})

test('Should prevent user deleting tasks they do not own', async () => {
    const response = await request(app)
        .delete(`/tasks/${Task1._id}`)
        .set('Authorization', `Bearer ${User2.tokens[0].token}`)
        .send()
        .expect(404)

    const task = Task.findById(Task1._id)
    expect(task).not.toBeNull()
})
