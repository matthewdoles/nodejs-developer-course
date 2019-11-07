// Challenge: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7a6c3b085ecd79d89f5840ba6b38422e/' + longitude +',' + latitude
    request({ url , json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        }
        else if (body.error) {
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature
            })
        }
    })
}

module.exports = forecast;