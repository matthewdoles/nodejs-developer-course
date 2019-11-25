const bcrpyt = require('bcryptjs')
const myFucntion = async () => {
    const password = 'red12345!'
    const hashedPassword = await bcrpyt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrpyt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}
myFucntion()