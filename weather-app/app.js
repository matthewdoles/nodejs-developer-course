const geocode = require('./utils/geocode')

geocode('Tampa', (error, data) => {
    console.log(data)
})
geocode('New York', (error, data) => {
    console.log(data)
})
