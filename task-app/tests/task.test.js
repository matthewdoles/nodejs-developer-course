const request = require('supertest')
const Task = require('../src/models/task')
const app = require('../src/app')
const { User1Id, User1, setupDatabase } = require('./fixtures/db')

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
