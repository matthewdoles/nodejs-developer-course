const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } 
    catch(e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } 
    catch(e) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValid = updates.every((update) =>  allowedUpdates.includes(update))

    if (!isValid) {
        return res.status(400).send({ error: 'invalid updates!' })
    }

    try {
        const task = await Task.findById(req.params.id)
        task.forEach((field) => task[field] = req.body[field])
        await task.save()
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router