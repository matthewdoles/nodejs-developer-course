// Challenge: Use the chalk library in your project
//
// 1. Install chalk using npm in terminal
// 2. Load chalk into this file
// 3. Use it to print the string "Success!" to the console in green
// 4. Test work
//
// Bonus: Use docs to mess around with other styles: bold and inverse

const chalk = require('chalk');

console.log(chalk.green('Success!'));
console.log(chalk.green.bold('Bold!'));
console.log(chalk.green.bold.inverse('Inverse!'));