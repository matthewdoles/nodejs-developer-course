const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
app.use(express.static(path.join(__dirname, '../public')))

// app.com
// app.com/help
// app.com/about

// Challenge: Create two more HTML files
//
// 1. Create a HTML page for about with 'About' title
// 2. Create a HTML page for help with 'Help' title
// 3. Remove the old rout handlers for both
// 4. Visit both in the browser to test your work

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