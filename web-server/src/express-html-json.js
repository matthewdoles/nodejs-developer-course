const express = require('express')

const app = express()

// app.com
// app.com/help
// app.com/about

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Matthew',
        age: 24
    },
    {
        name: 'Jordan',
        age: 28
    }])
})

// Challenge: Update routes
//
// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
//      - Object with forecast and location strings
// 3. Test your work by visiting both in the browser

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 70,
        location: 'Tampa'
    },
    {
        forecast: 20,
        location: 'Chicago'
    }])
})

app.listen(3000, () => {
    console.log('Server started on port 3000.')
})