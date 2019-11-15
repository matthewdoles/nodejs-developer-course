const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000

// paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        helpText: 'This is helpful text.',
        title: 'Help',
        name: 'Matthew Doles'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'No address provided'
        })
    }
    geocode(req.query.address, (error, {location, latitude, longitude} = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, {summary, temperature, high, low}) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                location,
                summary,
                temperature,
                high,
                low
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'No search term provided'
        })
    }
    console.log(req.query)
    res.send({
       products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Matthew Doles',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Matthew Doles',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server started on port ' + port + '.')
})