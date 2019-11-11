const https = require('https')

const url = 'https://api.darksky.net/forecast/7a6c3b085ecd79d89f5840ba6b38422e/40,-75';

 const request = https.request(url, (response) =>  {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()