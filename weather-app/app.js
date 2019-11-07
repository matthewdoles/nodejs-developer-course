const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

// Challenge: Accept location via command line argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations

const address = process.argv[2];
if (!address) {
    console.log(chalk.red('Please provide a valid address'))
}
else {
    geocode(address, (error, data) => {
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
