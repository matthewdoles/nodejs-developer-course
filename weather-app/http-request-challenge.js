const request = require('request')

const url = 'https://api.darksky.net/forecast/7a6c3b085ecd79d89f5840ba6b38422e/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary)
    console.log("It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})

// Geocoding
// Address -> Lat/Long -> Weather

// Challenge: Print the lat/long for Los Angeles
//
// 1. Fire off a new request to the URL explored in the browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work

const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=2&access_token=pk.eyJ1IjoibWF0dGhld2RvbGVzIiwiYSI6ImNrMm5weXkxNzB2aGwzbXFsNzF3OTI1YmQifQ.z1-tdZGJMuGj0C783-KaVg&limit=1'

request({ url: mapbox, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude)
})
