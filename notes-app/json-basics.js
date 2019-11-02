const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);

// JSON Output
//fs.writeFileSync('json-output.json', bookJSON);

// JSON Input
const dataBuffer = fs.readFileSync('json-output.json');
console.log(dataBuffer.toString());
const data = JSON.parse(dataBuffer.toString());
console.log(data.title);

// Challenge: Work with JSON and the file system
//
// 1. Laod and parse the JSON data from json-challenge.json
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwirte the original data
// 4. Test your work by viewing the data in the JSON file

const input = fs.readFileSync('json-challenge.json');
const inputData = JSON.parse(input.toString());
inputData.name = "Matthew";
inputData.age = 24;
const output = JSON.stringify(inputData);
fs.writeFileSync('json-challenge.json', output);