const request = require('request');
const chalk = require('chalk');

const url = 'https://api.darksky.net/forecast/7a6c3b085ecd79d89f5840ba6b38422e/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(chalk.red('Unable to connect to weather service.'))
    }
    else if (response.body.error) {
        console.log(chalk.red('Unable to find location.'))
    }
    else {
        console.log(response.body.daily.data[0].summary)
        console.log("It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
    }
})

// Geocoding
// Address -> Lat/Long -> Weather

// Chalenge: Handle errors for geocoding request
//
// 1. Setup error handler for low-level errors
// 2. Test by disabling netowrk request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=2&access_token=pk.eyJ1IjoibWF0dGhld2RvbGVzIiwiYSI6ImNrMm5weXkxNzB2aGwzbXFsNzF3OTI1YmQifQ.z1-tdZGJMuGj0C783-KaVg&limit=1'

request({ url: mapbox, json: true }, (error, response) => {
    if (error) {
        console.log(chalk.red('Unable to connect to location services.'))
    }
    else if (response.body.features.length === 0) {
        console.log(chalk.red('Unable to find location with given search parameters.'))
    }
    else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})
