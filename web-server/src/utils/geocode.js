const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=2&access_token=pk.eyJ1IjoibWF0dGhld2RvbGVzIiwiYSI6ImNrMm5weXkxNzB2aGwzbXFsNzF3OTI1YmQifQ.z1-tdZGJMuGj0C783-KaVg&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location with given search parameters.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;