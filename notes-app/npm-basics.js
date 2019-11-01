const validator = require('validator');

console.log(validator.isEmail('matthew@example.com'));
console.log(validator.isEmail('matthew@.com'));
console.log(validator.isURL('https://npmjs.com'));
console.log(validator.isURL('https://.com'));