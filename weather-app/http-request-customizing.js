const request = require('request')

const url = 'https://api.darksky.net/forecast/7a6c3b085ecd79d89f5840ba6b38422e/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently)
    console.log(response.body.currently.temperature)
    console.log(response.body.timezone)

    console.log(response.body.daily.data[0].summary)
    console.log("It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})

// Challenge: Print a small forecast to the user
//
// 1. Print "It is currently (retrieved temp.) degrees out. There is a (retrieved percip. prob.) chance of rain"
// 2. Test you work