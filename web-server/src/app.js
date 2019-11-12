const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// setup staic directory to serve
app.use(express.static(publicDirectoryPath))

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