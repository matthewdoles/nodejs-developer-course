const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

// app.com
// app.com/help
// app.com/about

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Matthew Doles'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Matthew Doles'
    })
})

// Challenge: Create a template for help page
//
// 1. Setting a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print
app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is helpful text.'
    })
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