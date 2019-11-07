const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

// Challenge: Accept location via command line argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations

// Challenge 2: Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and esure app still works

const address = process.argv[2];
if (!address) {
    console.log(chalk.red('Please provide a valid address'))
}
else {
    geocode(address, (error, {location, latitude, longitude}) => {
        if (error) {
            return console.log(chalk.red(error))
        }
        forecast(latitude, longitude, (error, {summary, temperature}) => {
            if (error) {
                return console.log(chalk.red(error))
            }
            console.log(location)
            console.log(summary)
            console.log('Current temperature:', temperature)
        })
    })
}


geocode('Tampa', (error, data) => {
    if (error) {
        return console.log(chalk.red(error))
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(chalk.red(error))
        }
        console.log(data.location)
        console.log(forecastData)
    })
})
