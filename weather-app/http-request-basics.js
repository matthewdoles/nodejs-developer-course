const request = require('request')

const url = 'https://api.darksky.net/forecast/7a6c3b085ecd79d89f5840ba6b38422e/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.currently)
})