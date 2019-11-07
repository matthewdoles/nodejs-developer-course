const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Tampa', (error, data) => {
    console.log(data)
})
geocode('New York', (error, data) => {
    console.log(data)
})

forecast(27.9478, -82.4584, (error, data) => {
    console.log(data)
})

forecast(40.7648, -73.9808, (error, data) => {
    console.log(data)
})
