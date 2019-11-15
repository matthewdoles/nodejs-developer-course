//fetch('http://puzzle.mead.io/puzzle').then((response) => {
//  response.json().then((data) => {
//        console.log(data)
//    })
//})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#location')
const messageTwo = document.querySelector('#temperature')
const messageThree = document.querySelector('#high')
const messageFour = document.querySelector('#low')
const messageFive = document.querySelector('#summary')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        }
        else {
            console.log(data)
            messageOne.textContent = 'Location: ' + data.location
            messageTwo.textContent = 'Temperature: ' + data.temperature + '° Fahrenheit'
            messageThree.textContent = 'High: ' + data.high + '° Fahrenheit'
            messageFour.textContent = 'Low: ' + data.low + '° Fahrenheit'
            messageFive.textContent = 'Outlook: ' + data.summary
        }
    })
})

    console.log(location)
    console.log('submit')
})