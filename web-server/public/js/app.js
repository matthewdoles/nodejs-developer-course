console.log('Client side JavaScript file is loaded.')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

// Challenge: fetch weather
//
// 1. Setup a call to fetch weather for Tampa
// 2. Get the parse JSON response
//      - If error property, print error
//      - If no error property, print location and forecast
// 3. Refresh the browser, and test your work

fetch('http://localhost:3000/weather?address=tampa').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        }
        else {
            console.log(data)
        }
    })
})