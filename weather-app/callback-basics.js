setTimeout(() => {
    console.log('Two seconds are up.')
}, 2000)

const names = ['Matthew', 'Dan', 'Sherry']
const shortName = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long: 0
        }
        callback(data)
    }, 2000);
}

geocode('Philidelphia', (data) => {
    console.log(data)
})

// Challenge: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (n1,  n2, callback) => {
    setTimeout(() => {
        sum = n1 + n2
        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})