const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

// 'Hello Matthew'
greeter('Matthew')

// 'Hello undefined' w/out default value
// 'Hello user' w/ default value
greeter()