const express = require('express')

const app = express()

// app.com
// app.com/help
// app.com/about

app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

// Challenge: Setup two new routes
//
// 1. Setup an about route and render a page title
// 2. Setup a weather  route and render a page title
// 3. Test your work by visitng both in the browser

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})

app.listen(3000, () => {
    console.log('Server started on port 3000.')
})