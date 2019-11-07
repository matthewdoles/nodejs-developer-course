const request = require('request');
const chalk = require('chalk');


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=2&access_token=pk.eyJ1IjoibWF0dGhld2RvbGVzIiwiYSI6ImNrMm5weXkxNzB2aGwzbXFsNzF3OTI1YmQifQ.z1-tdZGJMuGj0C783-KaVg&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location with given search parameters.', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Tampa', (error, data) => {
    console.log(data)
})
geocode('New York', (error, data) => {
    console.log(data)
})
